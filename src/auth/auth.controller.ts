import {
  Controller,
  Get,
  Post,
  Body,
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
    // Google 로그인 성공 시 JWT 토큰 발급
    const token = this.authService.generateJwtToken(req.user);
    return {
      message: 'Google OAuth login successful',
      user: req.user,
      access_token: token,
    };
  }

  /**
   * 일반 로그인
   */
  @Post('login')
  async login(@Body() loginDto: { email: string; password: string }) {
    const user = await this.authService.validateUser(
      loginDto.email,
      loginDto.password,
    );
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }
    const token = this.authService.generateJwtToken(user);
    return { access_token: token };
  }

  /**
   * JWT 인증 확인 (테스트용)
   */
  @Get('check')
  @UseGuards(AuthGuard('jwt'))
  async checkAuth(@Req() req) {
    return { message: 'Authenticated', user: req.user };
  }
}
