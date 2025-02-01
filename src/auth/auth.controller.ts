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

interface OAuthUser {
  googleSub: string;
  email: string;
  username: string;
  profileImg: string | null;
}

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

    const { googleSub, email, username, profileImg } = req.user as OAuthUser;

    const user = await this.authService.validateOrCreateGoogleUser(
      googleSub,
      email,
      username,
      profileImg,
    );

    if (!user) {
      return res.status(401).json({ message: 'User validation failed' });
    }

    const accessToken = await this.authService.generateAccessToken(
      user.id,
      user.email,
    );
    const refreshToken = await this.authService.generateRefreshToken(user.id);

    await this.authService.storeRefreshToken(
      user.id,
      accessToken,
      refreshToken,
    );

    res.cookie('access_token', accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 1000 * 60 * 60 * 24, // 1일
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

  @Get('refresh')
  @UseGuards(AuthGuard('jwt'))
  async refresh(@Req() req: Request, @Res() res: Response) {
    const user = req.user as { id: number; email: string };
    const userId = user?.id;

    // DB에서 refresh_token 가져오기
    const refreshToken = await this.authService.getStoredRefreshToken(userId);

    if (!refreshToken) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    const newAccessToken = await this.authService.refreshAccessToken(
      userId,
      refreshToken,
    );

    if (!newAccessToken) {
      return res.status(401).json({ message: 'Invalid refresh token' });
    }

    res.cookie('access_token', newAccessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 1000, // 1시간
    });

    return res.json({ message: 'Token refreshed' });
  }

  @Post('logout')
  @UseGuards(AuthGuard('jwt')) // JWT 인증 적용
  async logout(@Req() req: Request, @Res() res: Response) {
    const user = req.user as { id: number };
    if (!user?.id) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    // DB에서 해당 사용자의 refresh_token 삭제
    await this.authService.removeRefreshToken(user.id);

    // 쿠키에서 access_token 제거
    res.clearCookie('access_token', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
    });

    return res.status(200).json({ message: 'Logged out successfully' });
  }
}
