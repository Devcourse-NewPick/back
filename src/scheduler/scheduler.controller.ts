import { Controller, Post, Get, Body } from '@nestjs/common';
import { SchedulerService } from './scheduler.service';
import { Logger } from '@nestjs/common';
import { MailService } from '../mail/mail.service';
import { SubscriberService } from 'src/subscriber/subscriber.service';
import { NewsletterRepo } from 'src/repository/newsletter.repository';

@Controller('scheduler')
export class SchedulerController {
  constructor(
    private readonly schedulerService: SchedulerService,
    private readonly subscriberService: SubscriberService,
    private readonly logger: Logger,
    private readonly mailService: MailService,
    private readonly newsletterRepository: NewsletterRepo,
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

  @Get('mailtest') // 테스트용
  async getRecievers() {
    const recievers = await this.subscriberService.getSubscribers();
    this.logger.log(`구독자 목록을 가져왔습니다.${recievers}`);
    const newsletters = await this.newsletterRepository.getNewsletter(0, 3);
    const mail = await this.mailService.sendBulkMailWithMultipleNewsletter(
      recievers,
      newsletters,
      '테스트 입니다. \n 이곳에는 요약 뉴스가 들어갑니다.',
    );
    return { recievers, mail };
  }
}
