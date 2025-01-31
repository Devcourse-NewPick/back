import { Injectable, UnauthorizedException } from '@nestjs/common';
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
    let user = await this.prisma.user.findUnique({
      where: { email },
      select: { id: true, email: true, username: true, profileImg: true },
    });

    if (!user) {
      user = await this.prisma.user.create({
        data: {
          email,
          username,
          password: googleSub,
          profileImg,
        },
        select: { id: true, email: true, username: true, profileImg: true },
      });
    }

    return user;
  }

  async generateAccessToken(userId: number, email: string) {
    return this.jwtService.sign({ sub: userId, email }, { expiresIn: '1h' });
  }

  async generateRefreshToken(userId: number) {
    return this.jwtService.sign(
      { sub: userId },
      { expiresIn: '7d', secret: process.env.JWT_REFRESH_SECRET },
    );
  }

  async storeRefreshToken(
    userId: number,
    accessToken: string,
    refreshToken: string,
  ) {
    await this.prisma.oAuthToken.upsert({
      where: { userId: userId },
      update: {
        refreshToken,
        accessToken,
        expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      },
      create: {
        userId: userId,
        accessToken,
        refreshToken,
        expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      },
    });
  }

  async getStoredRefreshToken(userId: number) {
    const storedToken = await this.prisma.oAuthToken.findUnique({
      where: { userId: userId },
      select: { refreshToken: true },
    });

    return storedToken?.refreshToken || null;
  }

  async refreshAccessToken(userId: number, refreshToken: string) {
    const storedToken = await this.prisma.oAuthToken.findUnique({
      where: { userId: userId },
      select: { refreshToken: true },
    });

    if (!storedToken || storedToken.refreshToken !== refreshToken) {
      throw new UnauthorizedException('Invalid refresh token');
    }

    return this.generateAccessToken(userId, '');
  }

  async removeRefreshToken(userId: number) {
    await this.prisma.oAuthToken.deleteMany({ where: { userId: userId } });
  }
}
