import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { SubscriberService } from './subscriber.service';

@Controller('subscribers')
export class SubscriberController {
  constructor(private readonly subscriberService: SubscriberService) {}

  /**
   * 구독 시작
   * @param userId 사용자 ID
   */
  @Post('start')
  async startSubscription(@Body('userId') userId: number) {
    return this.subscriberService.startSubscription(userId);
  }

  /**
   * 구독 종료
   * @param userId 사용자 ID
   */
  @Post('end')
  async endSubscription(@Body('userId') userId: number) {
    return this.subscriberService.endSubscription(userId);
  }

  /**
   * 구독 상태 조회
   * @param userId 사용자 ID
   */
  @Get('status')
  async getSubscriptionStatus(@Query('userId') userId: number) {
    return this.subscriberService.getSubscriptionStatus(userId);
  }
}
