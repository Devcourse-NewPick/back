import {
  Controller,
  Get,
  Post,
  Body,
  Req,
  Res,
  UseGuards,
  UnauthorizedException,
  Options,
} from '@nestjs/common';
import { Response } from 'express';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  /**
   * Preflight 요청 허용 (CORS 문제 해결)
   */
  @Options('*')
  preflight(@Res() res: Response) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.sendStatus(204);
  }

  /**
   * Google OAuth 로그인 시작
   */
  @Get('google')
  @UseGuards(AuthGuard('google'))
  async googleLogin() {
    return { message: 'Redirecting to Google OAuth...' };
  }

  /**
   * Google OAuth 콜백 처리
   */
  @Get('google/callback')
  @UseGuards(AuthGuard('google'))
  async googleCallback(@Req() req, @Res() res: Response) {
    const { googleSub, email, username, profileImg } = req.user;

    // Google 사용자 검증 또는 생성
    const user = await this.authService.validateOrCreateGoogleUser(
      googleSub,
      email,
      username,
      profileImg,
    );

    if (!user) {
      throw new UnauthorizedException('Google OAuth user not found');
    }

    // JWT 토큰 발급
    const token = this.authService.generateJwtToken(user);

    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.send(`
    <script>
      const token = '${token}';
      if (window.opener) {
        window.opener.postMessage(
          { type: 'oauthSuccess', token },
          'http://localhost:3000'
        );
      } else if (window.parent) {
        window.parent.postMessage(
          { type: 'oauthSuccess', token },
          'http://localhost:3000'
        );
      }
      window.close();
    </script>
  `);
  }

  /**
   * 사용자 정보 반환
   */
  @Get('user')
  @UseGuards(AuthGuard('jwt'))
  async getUser(@Req() req, @Res() res: Response) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    if (!req.user) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    res.json({
      id: req.user.sub,
      email: req.user.email,
      username: req.user.username,
      profileImg: req.user.profileImg,
    });
  }

  /**
   * 일반 로그인 처리
   */
  @Post('login')
  async login(@Body() loginDto: { email: string; password: string }) {
    const user = await this.authService.validateUser(
      loginDto.email,
      loginDto.password,
    );
    if (!user) {
      return { message: 'Invalid credentials' };
    }
    const token = this.authService.generateJwtToken(user);
    return { access_token: token };
  }
}
