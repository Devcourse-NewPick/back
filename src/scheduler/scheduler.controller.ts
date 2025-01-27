import { Controller, Post, Get, Body } from '@nestjs/common';
import { SchedulerService } from './scheduler.service';
import { Logger } from '@nestjs/common';
import { MailService } from '../mail/mail.service';
import { SubscriberService } from 'src/subscriber/subscriber.service';

@Controller('scheduler')
export class SchedulerController {
  constructor(
    private readonly schedulerService: SchedulerService,
    private readonly subscriberService : SubscriberService,
    private readonly logger: Logger,
    private readonly mailService: MailService,
  ) {}

  @Post('crawling')
  toggleCrawling(@Body() data: { enable: boolean }) {
    const enable = Boolean(data.enable);
    this.schedulerService.toggleCrawlingScheduler(enable);
    return {
      success: true,
      enabled: enable,
      message: `크롤링 스케줄러가 ${enable ? '활성화' : '비활성화'} 되었습니다.`,
    };
  }

  @Post('ai-summary')
  toggleAiSummary(@Body() data: { enable: boolean }) {
    const enable = Boolean(data.enable);
    this.schedulerService.toggleAiSummaryScheduler(enable);
    return {
      success: true,
      enabled: enable,
      message: `뉴스레터 스케줄러가 ${enable ? '활성화' : '비활성화'} 되었습니다.`,
    };
  }

  @Get('status')
  getStatus() {
    return {
      isCrawlingEnabled: this.schedulerService.getIsCrawlingEnabled(),
      isAiSummaryEnabled: this.schedulerService.getIsAiSummaryEnabled(),
      message: '스케줄러 상태 조회 완료',
    };
  }

  @Get('get-recievers') // 테스트용
  async getRecievers() {
    const recievers = await this.subscriberService.getSubscribers();
    this.logger.log(`구독자 목록을 가져왔습니다.${recievers}`);
    const mail = await this.mailService.sendBulkMail(6, recievers);
    return { recievers, mail };
  }
}
