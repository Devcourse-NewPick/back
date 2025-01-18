import {
  Controller,
  Get,
  Req,
  UnauthorizedException,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { MyPageService } from './mypage.service';

@Controller('mypage')
@UseGuards(AuthGuard('jwt')) // JWT 인증 적용
export class MyPageController {
  constructor(private readonly myPageService: MyPageService) {}

  /**
   * 사용자 프로필 조회
   */
  @Get('profile')
  async getProfile(@Req() req) {
    if (!req.user || !req.user.userId) {
      throw new UnauthorizedException('User not authenticated');
    }
    return this.myPageService.getProfile(req.user.userId);
  }

  /**
   * 북마크(좋아요) 조회
   */
  @Get('bookmarks')
  async getBookmarks(@Req() req) {
    if (!req.user || !req.user.userId) {
      throw new UnauthorizedException('User not authenticated');
    }
    console.log(req.user); // userId를 제대로 가져오는지 확인
    return this.myPageService.getBookmarks(req.user.userId);
  }

  /**
   * 현재 구독 상태 확인
   */
  @Get('subscriptions/status')
  async getSubscriptionStatus(@Req() req) {
    if (!req.user || !req.user.userId) {
      throw new UnauthorizedException('User not authenticated');
    }
    return this.myPageService.getSubscriptionStatus(req.user.userId);
  }

  /**
   * 전체 구독 기록 조회
   */
  @Get('subscriptions/history')
  async getSubscriptionHistory(@Req() req) {
    if (!req.user || !req.user.userId) {
      throw new UnauthorizedException('User not authenticated');
    }
    return this.myPageService.getSubscriptionHistory(req.user.userId);
  }
}
