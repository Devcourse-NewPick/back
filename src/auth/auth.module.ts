import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtStrategy } from './jwt.strategy';
import { GoogleStrategy } from './google.strategy';
import { MysqlPrismaService } from 'prisma/mysql.service'; // MySQL Prisma Service
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }), // 기본 인증 전략 설정
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET') || 'default_secret',
        signOptions: { expiresIn: '1h' },
      }),
    }),
  ],
  controllers: [AuthController],
  providers: [
    AuthService, // 인증 서비스
    JwtStrategy, // JWT 인증 전략
    GoogleStrategy, // Google OAuth 전략
    MysqlPrismaService, // Prisma를 통한 DB 연동
  ],
  exports: [
    AuthService, // AuthService를 다른 모듈에서 사용 가능
    JwtModule, // JwtModule을 다른 모듈에서 사용 가능
  ],
})
export class AuthModule {}
