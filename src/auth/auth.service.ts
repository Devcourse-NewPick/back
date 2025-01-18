import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { MysqlPrismaService } from 'prisma/mysql.service'; // Prisma 서비스 경로 확인 필요

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly prisma: MysqlPrismaService,
  ) {}

  /**
   * 사용자 검증
   * @param email 사용자 이메일
   * @param password 사용자 비밀번호
   */
  async validateUser(email: string, password: string): Promise<any> {
    // DB에서 사용자 정보 조회
    const user = await this.prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      throw new UnauthorizedException('Invalid email or password');
    }

    // 비밀번호 비교 로직 추가 (예: bcrypt 사용)
    const isPasswordValid = password === user.password; // bcrypt.compare(password, user.password)
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid email or password');
    }

    // 검증된 사용자 정보 반환
    return { id: user.id, email: user.email };
  }

  /**
   * JWT 토큰 생성
   * @param user 사용자 정보
   */
  generateJwtToken(user: any): string {
    const payload = { email: user.email, sub: user.id }; // sub: subject (사용자 ID)
    return this.jwtService.sign(payload);
  }
}
