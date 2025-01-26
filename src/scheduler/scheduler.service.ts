import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression, SchedulerRegistry } from '@nestjs/schedule';
import { CrawlingService } from 'src/crawling/crawling.service';
import { CrawlingRepository } from 'src/crawling/crawling.repository';
import { MailService } from 'src/mail/mail.service';
import { GetRecieverService } from './getReciever.service';
import { OpenAiService } from 'src/ai-summary/openai.service';
import dayjs from 'dayjs';
@Injectable()
export class SchedulerService {
  private isCrawlingEnabled = false;
  private isAiSummaryEnabled = false;
  constructor(
    private readonly crawlingService: CrawlingService,
    private readonly crawlingRepository: CrawlingRepository,
    private readonly mailService: MailService,
    private readonly getRecieverService: GetRecieverService,
    private readonly openAiService: OpenAiService,
    private readonly schedulerRegistry: SchedulerRegistry,
  ) {}
  private readonly logger = new Logger(SchedulerService.name);

  @Cron(CronExpression.EVERY_DAY_AT_7AM)
  async startCrawling() {
    if (!this.isCrawlingEnabled) {
      this.logger.log('크롤링 스케줄러가 비활성화되었습니다.');
      return;
    }

    this.logger.debug(`크롤링 스케줄러가 활성화되었습니다.`);
    await this.crawlingRepository.deleteCrawledNews();
    await this.crawlingService.crawling();
  }

  @Cron(CronExpression.EVERY_DAY_AT_8AM)
  async sendAiSummary() {
    if (!this.isAiSummaryEnabled) {
      this.logger.log('ai 요약 스케줄러가 비활성화되었습니다.');
      return;
    }
    const startDate = dayjs().subtract(23, 'hour').toDate().toISOString();
    const endDate = dayjs().toDate().toISOString();
    const news = await this.crawlingRepository.getCrawledNews(
      startDate,
      endDate,
    );
    const newsletter = await this.openAiService.summarizeText(news.news);
    const subscribersEmail = await this.getRecieverService.getReciever();
    const result = await this.mailService.sendBulkMail(
      newsletter.newsletter.id,
      subscribersEmail,
    );
    this.logger.log(`가져온 뉴스 수 ${news.news.length}`);
    this.logger.log(`요약 뉴스 수 ${newsletter.newsletter.length}`);
    this.logger.log(`수신 자 수 ${subscribersEmail.length}`);
    this.logger.log(`발송 결과 ${result.message}`);
  }

  toggleCrawlingScheduler(enable: boolean) {
    this.isCrawlingEnabled = Boolean(enable);
    this.logger.debug(this.isCrawlingEnabled ? '활성화' : '비활성화');
  }

  toggleAiSummaryScheduler(enable: boolean) {
    this.isAiSummaryEnabled = enable;
    this.logger.debug(this.isAiSummaryEnabled ? '활성화' : '비활성화');
  }

  getSchedulerStatus() {
    return {
      crawling: this.isCrawlingEnabled,
      aiSummary: this.isAiSummaryEnabled,
    };
  }

  getIsCrawlingEnabled(): boolean {
    return this.isCrawlingEnabled;
  }

  getIsAiSummaryEnabled(): boolean {
    return this.isAiSummaryEnabled;
  }
}
