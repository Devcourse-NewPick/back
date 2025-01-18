import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { MysqlPrismaService } from 'prisma/mysql.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly prisma: MysqlPrismaService,
  ) {}

  /**
   * Google Auth 사용자 검증 또는 생성
   * @param googleSub Google Auth의 고유 사용자 ID
   * @param email 사용자 이메일
   */
  async validateOrCreateGoogleUser(
    googleSub: string,
    email: string,
  ): Promise<any> {
    let user = await this.prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      // 사용자 생성
      user = await this.prisma.user.create({
        data: {
          email,
          username: email.split('@')[0], // 기본값으로 이메일 앞부분 사용
        },
      });
    }

    console.log(`Google User Authenticated: ${googleSub}`);
    return user;
  }

  /**
   * JWT 토큰 생성
   * @param user 사용자 정보
   */
  generateJwtToken(user: { id: number; email: string }): string {
    const payload = { email: user.email, sub: user.id };
    return this.jwtService.sign(payload);
  }
}
