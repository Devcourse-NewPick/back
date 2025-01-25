import { Controller, Post, Get, Body } from '@nestjs/common';
import { SchedulerService } from './scheduler.service';
import { GetRecieverService } from './getReciever.service';
import { Logger } from '@nestjs/common';
import { MailService } from '../mail/mail.service';

@Controller('scheduler')
export class SchedulerController {
  constructor(
    private readonly schedulerService: SchedulerService,
    private readonly getRecieverService: GetRecieverService,
    private readonly logger: Logger,
    private readonly mailService: MailService,
  ) {}

  @Post('crawling')
  toggleCrawling(@Body() data: { enable: boolean }) {
    const enable = data.enable;
    this.schedulerService.toggleCrawlingScheduler(enable);
    return { success: true, enabled: enable };
  }

  @Post('ai-summary')
  toggleAiSummary(@Body() data: { enable: boolean }) {
    const enable = data.enable;
    this.schedulerService.toggleAiSummaryScheduler(enable);
    return { success: true, enabled: enable };
  }

  @Get('status')
  getStatus() {
    return this.schedulerService.getSchedulerStatus();
  }

  @Get('get-recievers') // 테스트용
  async getRecievers() {
    const recievers = await this.getRecieverService.getReciever();
    this.logger.log(`구독자 목록을 가져왔습니다.${recievers}`);
    const mail = await this.mailService.sendBulkMail(6, recievers);
    return { recievers, mail };
  }
}
