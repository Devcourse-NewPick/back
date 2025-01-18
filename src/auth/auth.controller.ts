import {
  Controller,
  Get,
  Req,
  UseGuards,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

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
  async googleCallback(@Req() req) {
    const { googleSub, email } = req.user;

    // Google Auth 사용자 검증 또는 생성
    const user = await this.authService.validateOrCreateGoogleUser(
      googleSub,
      email,
    );

    if (!user) {
      throw new UnauthorizedException('Google OAuth user not found');
    }

    // JWT 토큰 발급
    const token = this.authService.generateJwtToken(user);
    return {
      message: 'Google OAuth login successful',
      user: {
        id: user.id,
        email: user.email,
      },
      access_token: token,
    };
  }

  /**
   * JWT 인증 확인 (테스트용)
   */
  @Get('check')
  @UseGuards(AuthGuard('jwt'))
  async checkAuth(@Req() req) {
    return {
      message: 'Authenticated',
      user: req.user,
    };
  }
}
