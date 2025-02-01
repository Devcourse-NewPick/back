import { Injectable, Logger } from '@nestjs/common';
import { Cron, SchedulerRegistry } from '@nestjs/schedule';
import { MailService } from 'src/mail/mail.service';
import { OpenAiService } from 'src/ai-summary/openai.service';
import { CrawlingService } from 'src/crawling/crawling.service';
import { CrawlingRepository } from 'src/crawling/crawling.repository';
import { SubscriberService } from 'src/subscriber/subscriber.service';
import dayjs from 'dayjs';
import { CategoryRepository } from 'src/category/category.repository';
import { CronExpression } from 'src/common/constants';
import { NewsletterRepo } from 'src/repository/newsletter.repository';
import { HTMLFormatterService } from 'src/ai-summary/parseHtml.service';
import { NotFoundException } from '@nestjs/common';
import { CronTime } from 'cron';
import { setTimeofCycle } from 'src/common/helpers';
@Injectable()
export class SchedulerService {
  private isCrawlingEnabled = true;
  private isAiSummaryEnabled = true;
  constructor(
    private readonly logger: Logger,
    private readonly mailService: MailService,
    private readonly openAiService: OpenAiService,
    private readonly crawlingService: CrawlingService,
    private readonly subscriberService: SubscriberService,
    private readonly crawlingRepository: CrawlingRepository,
    private readonly categoryRepository: CategoryRepository,
    private readonly newsletterRepository: NewsletterRepo,
    private readonly htmlFormatterService: HTMLFormatterService,
    private schedulerRegistry: SchedulerRegistry,
  ) {}

  @Cron(CronExpression.EVERY_DAY_AT_7AM, {
    name: 'startCrawling',
  })
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
  @Cron(CronExpression.EVERY_DAY_AT_8AM, {
    name: 'makeAiSummary',
  })
  async makeAiSummary() {
    this.logger.debug('AI 요약 시작');

    if (!this.isAiSummaryEnabled) {
      this.logger.log('ai 요약 스케줄러가 비활성화되었습니다.');
      return;
    }

    try {
      const categoryList = await this.categoryRepository.findAll();
      const generatedNewsletter = [];

      for (const category of categoryList) {
        this.logger.debug(`카테고리 ${category.name} 요약 시작`);
        const startDate = dayjs().subtract(7, 'day').toDate().toISOString();
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
        if (newsletter.newsletter && newsletter.newsletter.length > 0) {
          generatedNewsletter.push(...newsletter.newsletter);
        }
        this.logger.log(`가져온 뉴스 수 ${news.news.length}`);
        if (newsletter.newsletter[0]) {
          this.logger.log(`요약 뉴스 제목 ${newsletter.newsletter[0].title}`);
        }
      }

      if (generatedNewsletter.length > 0) {
        await this.mailService.sendHtmlMail(
          'leeh09077@gmail.com',
          '',
          generatedNewsletter.map((n) => n.content).join('\n\n'),
          `${generatedNewsletter.length}개의 뉴스레터가 생성되었습니다`,
        );
        this.logger.log(`생성 뉴스 수 : ${generatedNewsletter.length}`);
        this.logger.log('메일 발송 완료');
      }
    } catch (error) {
      this.logger.error(`AI 요약 실패: ${error.message}`);
    }
  }
  // @Cron(CronExpression.EVERY_5_SECONDS)
  // async sendAiSummary() {
  //   const subscribers = await this.subscriberService.getSubscribers();
  //   if (subscribers.length === 0) {
  //     throw new NotFoundException('구독자가 없습니다.');
  //     return;
  //   }
  //   this.logger.debug(subscribers[0]);
  // }

  // 주간 요약 뉴스 발송
  @Cron(CronExpression.EVERY_MONDAY_AT_8AM, {
    name: 'sendNewsletter',
  })
  async sendEmailSummary() {
    const subscribers = await this.subscriberService.getSubscribers();
    const categoryList = await this.categoryRepository.findAll();
    if (subscribers.length === 0) {
      throw new NotFoundException('구독자가 없습니다.');
      return;
    }
    if (categoryList.length === 0) {
      throw new NotFoundException('카테고리가 없습니다.');
      return;
    }
    for (const category of categoryList) {
      const newsletters =
        await this.newsletterRepository.getNewsletterByCategoryIdAndDate(
          category.id,
          dayjs().subtract(7, 'day').toDate(),
          dayjs().toDate(),
        );
      const basicIntroduction = newsletters[0].content; //일시적으로 첫번째 뉴스를 기준으로 함
      const basicIntroductionAsHTML =
        await this.htmlFormatterService.formatHtml(basicIntroduction);

      const result = await this.mailService.sendBulkMailWithMultipleNewsletter(
        subscribers.map((subscriber) => ({
          email: subscriber.email,
          interests: subscriber.interests.map((interest) => interest.name),
        })),
        newsletters,
        basicIntroductionAsHTML,
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

  setMailSendCycle(hour: number, day: number) {
    hour = Number(hour) || 8;
    day = Number(day) || 1;
    const job = this.schedulerRegistry.getCronJob('sendNewsletter');
    const newSchedule = setTimeofCycle(hour, day);
    job.setTime(new CronTime(newSchedule));
    job.start();

    this.logger.debug(`메일 발송 주기가 ${newSchedule}로 변경되었습니다.`);
  }

  async manualStartAiSummary() {
    this.logger.debug('AI 요약 수동 시작');
    try {
      await this.makeAiSummary(); // 직접 메서드 호출
    } catch (error) {
      this.logger.error(`수동 AI 요약 실패: ${error.message}`);
    }
  }

  async manualStartCrawling() {
    this.logger.debug('크롤링 수동 시작');
    try {
      await this.startCrawling(); // 직접 메서드 호출
    } catch (error) {
      this.logger.error(`수동 크롤링 실패: ${error.message}`);
    }
  }

  getMailSendCycle() {
    const job = this.schedulerRegistry.getCronJob('sendNewsletter');
    return job.cronTime;
  }
}
