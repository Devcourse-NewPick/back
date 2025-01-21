<<<<<<< HEAD
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { Strategy, VerifyCallback } from 'passport-google-oauth20';
=======
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-google-oauth20';
>>>>>>> main

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor() {
    super({
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_REDIRECT_URI,
<<<<<<< HEAD
      scope: ['email', 'profile'],
=======
      scope: ['email', 'profile'], // 이메일 및 프로필 정보 요청
>>>>>>> main
    });
  }

  async validate(
    accessToken: string,
    refreshToken: string,
    profile: any,
<<<<<<< HEAD
    done: VerifyCallback,
  ): Promise<any> {
    const { id, emails, displayName, photos } = profile;

    const user = {
      googleSub: id,
      email: emails[0].value,
      username: displayName,
      profileImg: photos?.[0]?.value || null, // 이미지가 없으면 null 반환
    };

    done(null, user);
=======
  ): Promise<any> {
    const { name, emails, photos } = profile;
    const user = {
      email: emails[0].value,
      name: name.givenName,
      picture: photos[0].value,
      accessToken,
    };
    return user; // 유저 정보를 반환
>>>>>>> main
  }
}
