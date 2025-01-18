import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), // Authorization 헤더에서 토큰 추출
      ignoreExpiration: false, // 만료된 토큰을 허용하지 않음
      secretOrKey: process.env.JWT_SECRET, // 환경 변수에서 비밀 키 로드
    });
  }

  /**
   * 유효한 JWT에서 사용자 정보 추출
   */
  async validate(payload: any) {
    return { userId: payload.sub, email: payload.email }; // 사용자 ID와 이메일 반환
  }
}
