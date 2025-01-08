import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  @Get('google')
  @UseGuards(AuthGuard('google')) // Google OAuth 로그인 시작
  async googleLogin() {
    return { message: 'Redirecting to Google OAuth...' };
  }

  @Get('google/callback')
  @UseGuards(AuthGuard('google')) // Google OAuth 콜백 URL
  async googleCallback(@Req() req) {
    return {
      message: 'Google OAuth login successful',
      user: req.user, // 유저 정보 반환
    };
  }
}
