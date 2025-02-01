import {
  Controller,
  Get,
  Patch,
  Req,
  Body,
  UnauthorizedException,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { MyPageService } from './mypage.service';

@Controller('mypage')
// @UseGuards(AuthGuard('jwt')) // JWT 인증 적용
export class MyPageController {
  constructor(private readonly myPageService: MyPageService) {}

  /**
   * 사용자 프로필 조회
   */
  @Get('profile')
  async getProfile(@Req() req) {
    console.log('Decoded user:', req.user); // 디코딩된 사용자 정보 확인
    const userId = this.validateAndParseUserId(req.user?.id);
    return this.myPageService.getProfile(userId);
  }

  /**
   * 북마크(좋아요) 조회
   */
  @Get('bookmarks')
  async getBookmarks(@Req() req) {
    const userId = this.validateAndParseUserId(req.user?.id);
    return this.myPageService.getBookmarks(userId);
  }

  /**
   * 현재 구독 상태 확인
   */
  @Get('subscriptions/status')
  async getSubscriptionStatus(@Req() req) {
    const userId = this.validateAndParseUserId(req.user?.id);
    return this.myPageService.getSubscriptionStatus(userId);
  }

  /**
   * 전체 구독 기록 조회
   */
  @Get('subscriptions/history')
  async getSubscriptionHistory(@Req() req) {
    const userId = this.validateAndParseUserId(req.user?.id);
    return this.myPageService.getSubscriptionHistory(userId);
  }

  /**
   * 관심사 조회
   */
  @Get('interests')
  async getInterests(@Req() req) {
    const userId = this.validateAndParseUserId(req.user?.id);
    return this.myPageService.getInterests(userId);
  }

  /**
   * 관심사 더하긴
   */
  @Patch('interests')
  async addInterests(@Body() data: { categoryId: number; userId: number }) {
    const categoryId = Number(data.categoryId);
    const userId = this.validateAndParseUserId(data.userId);
    const changedInterests = await this.myPageService.addInterests(
      userId,
      categoryId,
    );
    return changedInterests;
  }

  /**
   * 관심사 삭제
   */
  @Patch('interests/remove')
  async removeInterests(@Body() data: { categoryId: number; userId: number }) {
    const categoryId = Number(data.categoryId);
    const userId = this.validateAndParseUserId(data.userId);
    const changedInterests = await this.myPageService.removeInterests(
      userId,
      categoryId,
    );
    return changedInterests;
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
