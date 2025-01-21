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
   * @param username 사용자 이름
   * @param profileImg 프로필 이미지 URL
   */
  async validateOrCreateGoogleUser(
    googleSub: string,
    email: string,
    username: string,
    profileImg: string,
  ): Promise<any> {
    let user = await this.prisma.user.findUnique({
      where: { email },
      select: { id: true, email: true, username: true, profileImg: true },
    });

    if (!user) {
      user = await this.prisma.user.create({
        data: {
          email,
          username,
          password: googleSub, // Google Sub를 비밀번호 대체값으로 사용
          profileImg,
        },
        select: { id: true, email: true, username: true, profileImg: true },
      });
    } else {
      if (!user.username || user.username !== username || !user.profileImg) {
        user = await this.prisma.user.update({
          where: { email },
          data: { username, profileImg },
          select: { id: true, email: true, username: true, profileImg: true },
        });
      }
    }

    return user;
  }

  /**
   * 일반 사용자 검증
   * @param email 사용자 이메일
   * @param password 사용자 비밀번호
   */
  async validateUser(email: string, password: string): Promise<any> {
    // 예시: 실제로는 DB에서 사용자 정보를 조회하고 비밀번호를 비교해야 함.
    if (email === 'test@example.com' && password === 'password') {
      return { id: 1, email };
    }
    return null;
  }

  /**
   * JWT 토큰 생성
   * @param user 사용자 정보
   */
  generateJwtToken(user: {
    id: number;
    email: string;
    username?: string;
    profileImg?: string;
  }): string {
    const payload = {
      email: user.email,
      sub: user.id,
      username: user.username || null,
      profileImg: user.profileImg || null,
    };
    return this.jwtService.sign(payload);
  }
}
