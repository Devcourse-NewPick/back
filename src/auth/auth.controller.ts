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

    // 유효한 사용자만 등록하도록 개선
    if (!email || !username) {
      return res.status(400).json({ message: 'Invalid user data' });
    }

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

    // Refresh Token을 한 번만 설정
    res.cookie('access_token', accessToken, {
      httpOnly: true,
      secure: true,
      sameSite: 'none',
      domain: '.newpick.site',
      path: '/',
      maxAge: 3 * 60 * 60 * 1000, // 3시간
    });

    res.cookie('refresh_token', refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: 'none',
      domain: '.newpick.site',
      path: '/',
      maxAge: 12 * 60 * 60 * 1000, // 12시간
    });

    const frontendUrl = process.env.FRONTEND_URL || 'https://www.newpick.site';

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
    if (!refreshToken) {
      return res
        .status(401)
        .json({ message: 'Unauthorized - No refresh token found' });
    }

    try {
      const userId =
        await this.authService.verifyAndDecodeRefreshToken(refreshToken);
      if (!userId) {
        return res
          .status(401)
          .json({ message: 'Unauthorized - Invalid refresh token' });
      }

      // Refresh Token이 DB에 저장된 것과 일치하는지 확인
      const isTokenValid = await this.authService.verifyRefreshToken(
        userId,
        refreshToken,
      );
      if (!isTokenValid) {
        return res
          .status(401)
          .json({ message: 'Unauthorized - Refresh token mismatch' });
      }

      const newAccessToken = await this.authService.generateAccessToken(userId);

      res.cookie('access_token', newAccessToken, {
        httpOnly: true,
        secure: true,
        sameSite: 'none',
        domain: '.newpick.site',
        path: '/',
        maxAge: 3 * 60 * 60 * 1000,
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
      // Refresh Token을 DB에서 완전히 삭제
      await this.authService.removeRefreshToken(user.id);
      console.log(`All refresh tokens removed for user ID: ${user.id}`);
    } catch (err) {
      console.error('Error removing refresh token:', err);
      return res.status(500).json({ message: 'Error removing refresh token' });
    }

    // 쿠키 완전 삭제
    res.clearCookie('access_token', {
      httpOnly: true,
      secure: true,
      sameSite: 'none',
      domain: '.newpick.site',
      path: '/',
    });

    res.clearCookie('refresh_token', {
      httpOnly: true,
      secure: true,
      sameSite: 'none',
      domain: '.newpick.site',
      path: '/',
    });

    return res.status(200).json({ message: 'Logged out successfully' });
  }
}
