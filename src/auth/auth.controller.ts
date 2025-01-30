import {
  Controller,
  Get,
  Post,
  Req,
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

    const { accessToken, refreshToken } =
      await this.authService.generateJwtTokens(user);

    res.cookie('access_token', accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 1000 * 60 * 60 * 24,
    });

    res.cookie('refresh_token', refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    res.cookie('user_id', user.id, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 1000 * 60 * 60 * 24,
    });

    const frontendUrl = process.env.FRONTEND_URL || 'http://localhost:3000';

    return res.send(`
      <html>
        <body>
          <h1>OAuth Success</h1>
          <p>Authentication successful. Closing window...</p>
          <script>
            try {
              const token = '${accessToken}';
              const user = ${JSON.stringify(user)
                .replace(/\\/g, '\\\\')
                .replace(/'/g, "\\'")};

              if (window.opener) {
                window.opener.postMessage({ type: 'oauthSuccess', token, user }, '${frontendUrl}');
              } else if (window.parent) {
                window.parent.postMessage({ type: 'oauthSuccess', token, user }, '${frontendUrl}');
              }

              document.body.innerHTML += '<h3>Information sent to parent window.</h3>';
              setTimeout(() => window.close(), 2000);
            } catch (err) {}
          </script>
        </body>
      </html>
    `);
  }

  @Get('refresh')
  async refresh(@Req() req: Request, @Res() res: Response) {
    const refreshToken = req.cookies['refresh_token'];
    if (!refreshToken) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    const newAccessToken =
      await this.authService.refreshAccessToken(refreshToken);
    if (!newAccessToken) {
      return res.status(401).json({ message: 'Invalid refresh token' });
    }

    res.cookie('access_token', newAccessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 1000,
    });

    return res.json({ message: 'Token refreshed' });
  }

  @Post('logout')
  async logout(@Req() req: Request, @Res() res: Response) {
    const refreshToken = req.cookies['refresh_token'];
    if (!refreshToken) {
      return res.status(400).json({ message: 'No refresh token found' });
    }

    await this.authService.removeRefreshToken(refreshToken);

    res.clearCookie('access_token');
    res.clearCookie('refresh_token');

    return res.status(200).json({ message: 'Logged out successfully' });
  }
}
