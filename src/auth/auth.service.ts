import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { MysqlPrismaService } from 'prisma/mysql.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly prisma: MysqlPrismaService,
  ) {}

  async validateOrCreateGoogleUser(
    googleSub: string,
    email: string,
    username: string,
    profileImg: string,
  ) {
    if (!email || !username) return null; // 유효한 사용자만 저장
    let user = await this.prisma.user.findUnique({ where: { email } });

    if (!user) {
      user = await this.prisma.user.create({
        data: { email, username, password: googleSub, profileImg },
      });
    }
    return user;
  }
  async generateAccessToken(userId: number) {
    const token = this.jwtService.sign({ sub: userId }, { expiresIn: '180m' }); // 3시간
    console.log('Access Token:', token); // 토큰 확인
    return token;
  }

  async generateRefreshToken(userId: number) {
    const token = this.jwtService.sign(
      { sub: userId },
      { expiresIn: '12h', secret: process.env.JWT_REFRESH_SECRET }, // 12시간
    );
    console.log('Refresh Token:', token); // 토큰 확인
    return token;
  }

  async storeRefreshToken(userId: number, refreshToken: string) {
    await this.prisma.oAuthToken.upsert({
      where: { userId },
      update: {
        refreshToken,
        expiresAt: new Date(Date.now() + 12 * 60 * 60 * 1000), // 12시간
      },
      create: {
        user: { connect: { id: userId } },
        accessToken: '',
        refreshToken,
        expiresAt: new Date(Date.now() + 12 * 60 * 60 * 1000), // 12시간 후 만료
      },
    });
  }

  // **
  //  * 만료된 Access Token에서도 userId(sub)를 추출하는 메서드
  //  */
  // decodeExpiredAccessToken(token: string) {
  //   try {
  //     return this.jwtService.decode(token) as { sub: number } | null;
  //   } catch (err) {
  //     return null;
  //   }
  // }

  async verifyRefreshToken(
    userId: number,
    refreshToken: string,
  ): Promise<boolean> {
    console.log('Verifying refresh token for user:', userId);
    console.log('Received token from request:', refreshToken);

    const storedToken = await this.prisma.oAuthToken.findUnique({
      where: { userId },
      select: { refreshToken: true },
    });

    console.log('Stored token in DB:', storedToken?.refreshToken);

    return storedToken?.refreshToken === refreshToken;
  }

  async removeRefreshToken(userId: number): Promise<number> {
    const result = await this.prisma.oAuthToken.deleteMany({
      where: { userId },
    });
    console.log(
      `Deleted ${result.count} refresh tokens for user ID: ${userId}`,
    );
    return result.count; // 삭제된 토큰 개수 반환 확인용....하..
  }

  async verifyAndDecodeRefreshToken(
    refreshToken: string,
  ): Promise<number | null> {
    console.log('Received Refresh Token:', refreshToken);

    try {
      const decoded = this.jwtService.verify(refreshToken, {
        secret: process.env.JWT_REFRESH_SECRET,
      });

      console.log('Decoded Refresh Token:', decoded);
      return decoded?.sub || null;
    } catch (err) {
      console.error('Refresh Token Verification Failed:', err.message);
      return null;
    }
  }
}
