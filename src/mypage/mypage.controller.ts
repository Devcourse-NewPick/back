import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { MyPageService } from './mypage.service';

@Controller('mypage')
@UseGuards(AuthGuard('jwt')) // JWT 인증 적용
export class MyPageController {
  constructor(private readonly myPageService: MyPageService) {}

  @Get('profile')
  async getProfile(@Req() req) {
    return this.myPageService.getProfile(req.user.userId);
  }

  @Get('bookmarks')
  async getBookmarks(@Req() req) {
    console.log(req.user); // userId를 제대로 가져오는지 확인
    return this.myPageService.getBookmarks(req.user.userId);
  }
}
