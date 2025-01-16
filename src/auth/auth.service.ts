import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  validateUser(email: string, password: string): any {
    // 실제로는 DB에서 사용자 정보를 조회하고 검증해야 합니다.
    if (email === 'test@example.com' && password === 'password') {
      return { id: 1, email };
    }
    return null;
  }

  generateJwtToken(user: any): string {
    const payload = { email: user.email, sub: user.id };
    return this.jwtService.sign(payload);
  }
}
