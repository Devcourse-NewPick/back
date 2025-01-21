<<<<<<< HEAD
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { Strategy, ExtractJwt } from 'passport-jwt';
=======
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
>>>>>>> main

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET,
    });
  }

  async validate(payload: any) {
<<<<<<< HEAD
    return {
      userId: payload.sub,
      email: payload.email,
      username: payload.username,
      profileImg: payload.profileImg,
    };
=======
    return { userId: payload.sub, email: payload.email };
>>>>>>> main
  }
}
