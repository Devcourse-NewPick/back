import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { GoogleStrategy } from './google.strategy';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'google' }),
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'default_jwt_secret_key', // JWT 시크릿 키
      signOptions: { expiresIn: '1h' }, // 토큰 만료 시간
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, GoogleStrategy], // Google OAuth2 전략 주입
  exports: [AuthService],
})
export class AuthModule {}
