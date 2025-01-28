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
    try {
      const { googleSub, email, username, profileImg } = req.user;

      // 사용자 검증 또는 생성
      const user = await this.authService.validateOrCreateGoogleUser(
        googleSub,
        email,
        username,
        profileImg,
      );

      if (!user) {
        throw new UnauthorizedException('User validation failed');
      }

      // JWT 생성
      const token = this.authService.generateJwtToken(user);

      // 쿠키 설정
      res.cookie('access_token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production', // HTTPS에서만 전송
        sameSite: 'lax', // CSRF 방지
        maxAge: 1000 * 60 * 60 * 24, // 24시간 유지
      });

      res.cookie('user_id', user.id, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production', // HTTPS에서만 전송
        sameSite: 'lax', // CSRF 방지
        maxAge: 1000 * 60 * 60 * 24, // 24시간 유지
      });

      // CORS 헤더 설정
      const frontendUrl = process.env.FRONTEND_URL || 'http://localhost:3000';
      res.header('Access-Control-Allow-Origin', frontendUrl);
      res.header('Access-Control-Allow-Credentials', 'true');

      // HTML 반환 (한 번의 응답으로 모든 작업 수행)
      res.send(`
      <html>
        <body>
          <h1>OAuth Success</h1>
          <p>Authentication successful. Closing window...</p>
          <script>
            try {
              const token = '${token}';
              const user = ${JSON.stringify(user)
                .replace(/\\/g, '\\\\') // 역슬래시 이스케이프
                .replace(/'/g, "\\'")}'; // 작은 따옴표 이스케이프

              console.log('OAuth Success: Token and User received');

              // 사용자 정보를 부모 창에 전송
              if (window.opener) {
                window.opener.postMessage({ type: 'oauthSuccess', token, user }, '${frontendUrl}');
              } else if (window.parent) {
                window.parent.postMessage({ type: 'oauthSuccess', token, user }, '${frontendUrl}');
              } else {
                console.warn('No opener or parent window found');
              }

              // 브라우저에 표시
              document.body.innerHTML += '<h3>Information sent to parent window.</h3>';

              // 창 닫기 시도
              setTimeout(() => window.close(), 2000);
            } catch (err) {
              console.error('Error handling OAuth success:', err);
            }
          </script>
        </body>
      </html>
    `);
    } catch (error) {
      console.error('Error in Google OAuth Callback:', error.message);
      res.status(400).send(`
      <html>
        <body>
          <h1>Authentication failed</h1>
          <p>Error: ${error.message}</p>
          <script>
            console.error('Authentication failed: ${error.message}');
            alert('Authentication failed. Please try again.');
            window.close();
          </script>
        </body>
      </html>
    `);
    }
  }

  /**
   * 로그아웃 처리
   */
  @Post('logout')
  logout(@Res() res: Response) {
    const isProduction = process.env.NODE_ENV === 'production';

    // access_token 쿠키 삭제
    res.clearCookie('access_token', {
      path: '/',
      httpOnly: true,
      secure: isProduction,
      sameSite: 'lax',
    });

    // user_id 쿠키 삭제
    res.clearCookie('user_id', {
      path: '/',
      httpOnly: true,
      secure: isProduction,
      sameSite: 'lax',
    });

    return res.status(200).json({ message: 'Logged out successfully' });
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
