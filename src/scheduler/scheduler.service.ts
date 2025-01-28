import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { MailService } from 'src/mail/mail.service';
import { OpenAiService } from 'src/ai-summary/openai.service';
import { CrawlingService } from 'src/crawling/crawling.service';
import { CrawlingRepository } from 'src/crawling/crawling.repository';
import { SubscriberService } from 'src/subscriber/subscriber.service';
import dayjs from 'dayjs';
import { CategoryRepository } from 'src/category/category.repository';
import { CronExpression } from 'src/common/constants';
import { BasicSummarizeService } from 'src/ai-summary/basicSummarize.service';
import { NewsletterRepo } from 'src/repository/newsletter.repository';
import { HTMLFormatterService } from 'src/ai-summary/parseHtml.service';
@Injectable()
export class SchedulerService {
  private isCrawlingEnabled = false;
  private isAiSummaryEnabled = false;
  constructor(
    private readonly logger: Logger,
    private readonly mailService: MailService,
    private readonly openAiService: OpenAiService,
    private readonly crawlingService: CrawlingService,
    private readonly subscriberService: SubscriberService,
    private readonly crawlingRepository: CrawlingRepository,
    private readonly categoryRepository: CategoryRepository,
    private readonly basicSummarizeService: BasicSummarizeService,
    private readonly newsletterRepository: NewsletterRepo,
    private readonly htmlFormatterService: HTMLFormatterService,
  ) {}

  @Cron(CronExpression.EVERY_DAY_AT_8AM)
  async startCrawling() {
    if (!this.isCrawlingEnabled) {
      this.logger.log('크롤링 스케줄러가 비활성화되었습니다.');
      return;
    }

    this.logger.debug(`크롤링 스케줄러가 활성화되었습니다.`);
    await this.crawlingRepository.deleteCrawledNews();
    await this.crawlingService.crawling();
  }
  // ai 요약 스케줄러
  @Cron(CronExpression.EVERY_DAY_AT_8PM)
  async makeAiSummary() {
    if (!this.isAiSummaryEnabled) {
      this.logger.log('ai 요약 스케줄러가 비활성화되었습니다.');
      return;
    }
    const categoryList = await this.categoryRepository.findAll();
    for (const category of categoryList) {
      const startDate = dayjs().subtract(23, 'hour').toDate().toISOString();
      const endDate = dayjs().toDate().toISOString();
      const news = await this.crawlingRepository.getCrawledNews(
        startDate,
        endDate,
        category.id,
      );
      const newsletter = await this.openAiService.summarizeText(
        news.news,
        category.id,
      );
      this.logger.log(`가져온 뉴스 수 ${news.news.length}`);
      this.logger.log(`요약 뉴스 수 ${newsletter.newsletter.length}`);
    }
    this.logger.log(`생성 뉴스 수 : ${categoryList.length}`);
  }
  // 주간 요약 뉴스 발송
  @Cron(CronExpression.EVERY_MONDAY_AT_8AM)
  async sendAiSummary() {
    const subscribersEmail = await this.subscriberService.getSubscribers();
    const categoryList = await this.categoryRepository.findAll();
    for (const category of categoryList) {
      const newsletters =
        await this.newsletterRepository.getNewsletterByCategoryIdAndDate(
          category.id,
          dayjs().subtract(7, 'day').toDate(),
          dayjs().toDate(),
        );
      const summary = await this.basicSummarizeService.basicSummarize(
        newsletters.map((item) => item.content).join('\n\n'),
        500,
        1000,
      );
      const formattedSummary = await this.htmlFormatterService.formatHtml(
        summary.choices[0].message.content,
      );
      const result = await this.mailService.sendBulkMailWithMultipleNewsletter(
        subscribersEmail,
        newsletters,
        formattedSummary,
      );
      this.logger.log(`발송 결과 ${result.message}`);
    }
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
