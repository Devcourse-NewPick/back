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
    console.log('Decoded user:', req.user); // 디코딩된 사용자 정보 확인
    const userId = this.validateAndParseUserId(req.user?.userId);
    return this.myPageService.getProfile(userId);
  }

  /**
   * 북마크(좋아요) 조회
   */
  @Get('bookmarks')
  async getBookmarks(@Req() req) {
    const userId = this.validateAndParseUserId(req.user?.userId);
    console.log(req.user); // userId를 제대로 가져오는지 확인
    return this.myPageService.getBookmarks(userId);
  }

  /**
   * 현재 구독 상태 확인
   */
  @Get('subscriptions/status')
  async getSubscriptionStatus(@Req() req) {
    const userId = this.validateAndParseUserId(req.user?.userId);
    return this.myPageService.getSubscriptionStatus(userId);
  }

  /**
   * 전체 구독 기록 조회
   */
  @Get('subscriptions/history')
  async getSubscriptionHistory(@Req() req) {
    const userId = this.validateAndParseUserId(req.user?.userId);
    return this.myPageService.getSubscriptionHistory(userId);
  }

  /**
   * userId를 검증하고 Int로 변환
   */
  private validateAndParseUserId(userId: string | number | undefined): number {
    console.log('Raw userId:', userId); // 원본 userId 값 출력
    if (!userId) {
      throw new UnauthorizedException('User not authenticated');
    }

    const parsedId = typeof userId === 'string' ? parseInt(userId, 10) : userId;

    console.log('Parsed userId:', parsedId); // 변환된 userId 확인

    if (isNaN(parsedId) || parsedId < -2147483648 || parsedId > 2147483647) {
      throw new UnauthorizedException('Invalid or out-of-range user ID');
    }

    return parsedId;
  }
}
