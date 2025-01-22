import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtStrategy } from './jwt.strategy';
import { GoogleStrategy } from './google.strategy';
import { MysqlPrismaService } from 'prisma/mysql.service'; // MySQL Prisma Service

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }), // 기본 인증 전략 설정
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'default_secret', // 환경 변수에서 JWT 비밀 키 가져오기
      signOptions: { expiresIn: '1h' }, // 토큰 유효 기간 설정
    }),
  ],
  controllers: [AuthController],
  providers: [
    AuthService,       // 인증 서비스
    JwtStrategy,       // JWT 인증 전략
    GoogleStrategy,    // Google OAuth 전략
    MysqlPrismaService // Prisma를 통한 DB 연동
  ],
  exports: [
    AuthService, // AuthService를 다른 모듈에서 사용 가능
    JwtModule,   // JwtModule을 다른 모듈에서 사용 가능
  ],
})
export class AuthModule {}
