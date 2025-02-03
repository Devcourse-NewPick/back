import {
  Controller,
  Get,
  Req,
  Post,
  Res,
  UseGuards,
  UnauthorizedException,
} from '@nestjs/common';
import { Response, Request } from 'express';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('google')
  @UseGuards(AuthGuard('google'))
  async googleLogin() {
    return { message: 'Redirecting to Google OAuth...' };
  }

  @Get('google/callback')
  @UseGuards(AuthGuard('google'))
  async googleCallback(@Req() req: Request, @Res() res: Response) {
    if (!req.user) {
      throw new UnauthorizedException('OAuth user not found');
    }

    const { googleSub, email, username, profileImg } = req.user as any;

    const user = await this.authService.validateOrCreateGoogleUser(
      googleSub,
      email,
      username,
      profileImg,
    );

    if (!user) {
      return res.status(401).json({ message: 'User validation failed' });
    }

    const accessToken = await this.authService.generateAccessToken(user.id);
    const refreshToken = await this.authService.generateRefreshToken(user.id);

    await this.authService.storeRefreshToken(user.id, refreshToken);

    res.cookie('access_token', accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'none',
      maxAge: 3 * 60 * 60 * 1000, // 3시간
    });

    res.cookie('refresh_token', refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'none',
      maxAge: 12 * 60 * 60 * 1000, // 12시간
    });

    const frontendUrl = process.env.FRONTEND_URL || 'http://localhost:3000';

    return res.send(`
      <script>
        try {
          const user = ${JSON.stringify({
            email: user.email,
            username: user.username,
            profileImg: user.profileImg,
          })
            .replace(/\\/g, '\\\\')
            .replace(/'/g, "\\'")};
    
          if (window.opener) {
            window.opener.postMessage({ type: 'oauthSuccess', user }, '${frontendUrl}');
          } else if (window.parent) {
            window.parent.postMessage({ type: 'oauthSuccess', user }, '${frontendUrl}');
          }
          
          window.close();
        } catch (err) {}
      </script>
    `);
  }

  /**
   * Refresh Token을 사용하여 새로운 Access Token 발급
   * authGuard를 제거하여 만료된 Access Token도 허용
   */
  @Get('refresh')
  async refresh(@Req() req: Request, @Res() res: Response) {
    const refreshToken = req.cookies['refresh_token'];
    const accessToken = req.cookies['access_token'];

    if (!refreshToken) {
      return res
        .status(401)
        .json({ message: 'Unauthorized - No refresh token found' });
    }

    try {
      let userId: number;
      try {
        const decoded = this.authService.decodeExpiredAccessToken(accessToken);
        userId = decoded?.sub;
      } catch (err) {
        return res
          .status(401)
          .json({ message: 'Unauthorized - Invalid access token' });
      }

      // Refresh Token 검증
      const isValid = await this.authService.verifyRefreshToken(
        userId,
        refreshToken,
      );
      if (!isValid) {
        return res
          .status(401)
          .json({ message: 'Unauthorized - Invalid refresh token' });
      }

      // 새로운 Access Token 발급
      const newAccessToken = await this.authService.generateAccessToken(userId);

      res.cookie('access_token', newAccessToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'none',
        maxAge: 3 * 60 * 60 * 1000, // 3시간
      });

      return res.json({
        message: 'Token refreshed',
        accessToken: newAccessToken,
      });
    } catch (err) {
      return res
        .status(401)
        .json({ message: 'Unauthorized - Token verification failed' });
    }
  }

  @Post('logout')
  @UseGuards(AuthGuard('jwt'))
  async logout(@Req() req: Request, @Res() res: Response) {
    const user = req.user as { id: number };
    if (!user?.id) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    try {
      await this.authService.removeRefreshToken(user.id);
    } catch (err) {
      return res.status(500).json({ message: 'Error removing refresh token' });
    }

    res.clearCookie('access_token', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'none',
    });

    res.clearCookie('refresh_token', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'none',
    });

    return res.status(200).json({ message: 'Logged out successfully' });
  }
}
