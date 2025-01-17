import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { SubscriberService } from './subscriber.service';

@Controller('subscribers')
export class SubscriberController {
  constructor(private readonly subscriberService: SubscriberService) {}

  @Post('start')
  async startSubscription(@Body('userId') userId: number) {
    return this.subscriberService.startSubscription(userId);
  }

  @Post('end')
  async endSubscription(@Body('userId') userId: number) {
    return this.subscriberService.endSubscription(userId);
  }

  @Get('status')
  async getSubscriptionStatus(@Query('userId') userId: number) {
    return this.subscriberService.getSubscriptionStatus(userId);
  }
}
