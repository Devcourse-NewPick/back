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
          username, // Google displayName 저장
          profileImg, // Google 프로필 이미지 저장
        },
        select: { id: true, email: true, username: true, profileImg: true },
      });
    } else {
      // 기존 사용자의 username이 없거나 변경되었으면 업데이트
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
   * JWT 토큰 생성
   * @param user 사용자 정보
   */
  generateJwtToken(user: {
    id: number;
    email: string;
    username: string;
    profileImg: string;
  }): string {
    const payload = {
      email: user.email,
      sub: user.id,
      username: user.username,
      profileImg: user.profileImg,
    };
    return this.jwtService.sign(payload);
  }
}
