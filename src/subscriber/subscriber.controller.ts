import {
  Controller,
  Get,
  Post,
  Body,
  Query,
  ParseIntPipe,
} from '@nestjs/common';
import { SubscriberService } from './subscriber.service';

@Controller('subscribers')
export class SubscriberController {
  constructor(private readonly subscriberService: SubscriberService) {}

  /**
   * 구독 시작
   * @param userId 사용자 ID
   */
  @Post('start')
  async startSubscription(@Body('userId', ParseIntPipe) userId: number) {
    return this.subscriberService.startSubscription(userId);
  }

  /**
   * 구독 종료
   * @param userId 사용자 ID
   */
  @Post('end')
  async endSubscription(@Body('userId', ParseIntPipe) userId: number) {
    return this.subscriberService.endSubscription(userId);
  }

  /**
   * 구독 상태 조회
   * @param userId 사용자 ID
   */
  @Get('status')
  async getSubscriptionStatus(@Query('userId', ParseIntPipe) userId: number) {
    return this.subscriberService.getSubscriptionStatus(userId);
  }

  /**
   * 전체 구독 기록 조회
   * @param userId 사용자 ID
   */
  @Get('history')
  async getSubscriptionHistory(@Query('userId', ParseIntPipe) userId: number) {
    return this.subscriberService.getSubscriptionHistory(userId);
  }
}
