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
  private isMailSendEnabled = true;
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

  @Cron(CronExpression.EVERY_DAY_AT_8AM, {
    //한국시간으로 오전 8시
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
  @Cron(CronExpression.EVERY_DAY_AT_830AM, {
    //한국시간으로 오전 8시 30분
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
          false,
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
  @Cron(CronExpression.EVERY_MONDAY_AT_840AM, {
    //한국시간으로 월요일 오전 8시 40분
    name: 'sendNewsletter',
  })
  async sendEmailSummary() {
    if (!this.isMailSendEnabled) {
      this.logger.log('메일 발송 스케줄러가 비활성화되었습니다.');
      return;
    }
    const subscribers = await this.subscriberService.getSubscribers();
    this.logger.debug(`구독자 수: ${subscribers.length}`);

    if (subscribers.length === 0) {
      throw new NotFoundException('구독자가 없습니다.');
      return;
    }

    // 관심사가 설정된 구독자만 필터링
    const validSubscribers = subscribers.filter(
      (subscriber) => subscriber.interests && subscriber.interests.length > 0,
    );

    if (validSubscribers.length === 0) {
      this.logger.warn('관심사가 설정된 구독자가 없습니다.');
      return;
    }

    // 지난 7일간의 모든 뉴스레터를 한번에 가져옵니다
    const allNewsletters =
      await this.newsletterRepository.getNewsletterByDateRange(
        dayjs().subtract(7, 'day').toDate(),
        dayjs().toDate(),
      );

    this.logger.debug(`기간 내 뉴스레터 수: ${allNewsletters.length}`);

    if (!allNewsletters.length) {
      this.logger.debug('기간 내 뉴스레터가 없습니다.');
      return;
    }

    // 첫 번째 뉴스레터의 content를 기본 소개글로 사용 (일시적)
    const basicIntroductionAsHTML = allNewsletters[0].contentAsHTML
      .replace(/```/gm, '')
      .replace(/html/gm, '');

    const result = await this.mailService.sendBulkMailWithMultipleNewsletter(
      validSubscribers.map((subscriber) => ({
        email: subscriber.email,
        interests: subscriber.interests,
        name: subscriber.name,
      })),
      allNewsletters,
      basicIntroductionAsHTML,
    );

    this.logger.log(
      `발송 결과 ${result.details.filter((r) => r.success).length}건 성공, ${result.details.filter((r) => !r.success).length}건 실패`,
    );
  }

  toggleCrawlingScheduler(enable: boolean) {
    this.isCrawlingEnabled = Boolean(enable);
    this.logger.debug(this.isCrawlingEnabled ? '활성화' : '비활성화');
  }

  toggleAiSummaryScheduler(enable: boolean) {
    this.isAiSummaryEnabled = enable;
    this.logger.debug(this.isAiSummaryEnabled ? '활성화' : '비활성화');
  }

  toggleMailSendScheduler(enable: boolean) {
    this.isMailSendEnabled = enable;
    this.logger.debug(this.isMailSendEnabled ? '활성화' : '비활성화');
  }

  getSchedulerStatus() {
    return {
      crawling: this.isCrawlingEnabled,
      aiSummary: this.isAiSummaryEnabled,
      mailing: this.isMailSendEnabled,
      mailSendCycle: this.getMailSendCycle(),
    };
  }

  setMailSendCycle(hour: number, day: number) {
    hour = Number(hour) || 17;
    day = Number(day) || 1;
    const job = this.schedulerRegistry.getCronJob('sendNewsletter');
    const newSchedule = setTimeofCycle(hour, day);
    job.setTime(new CronTime(newSchedule));
    job.start();

    this.logger.debug(`메일 발송 주기가 ${job.cronTime}로 변경되었습니다.`);
    return job.cronTime;
  }

  async manualStartAiSummary() {
    this.logger.debug('AI 요약 수동 시작');
    try {
      await this.makeAiSummary(); // 직접 메서드 호출
    } catch (error) {
      this.logger.error(`수동 AI 요약 실패: ${error.message}`);
    }
  }
  async manualStartMailSend() {
    this.logger.debug('메일 발송 수동 시작');
    try {
      await this.sendEmailSummary(); // 직접 메서드 호출
    } catch (error) {
      this.logger.error(`수동 메일 발송 실패: ${error.message}`);
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
