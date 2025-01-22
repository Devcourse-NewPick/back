import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { CrawlingService } from 'src/crawling/crawling.service';
import { CrawlingRepository } from 'src/crawling/crawling.repository';

@Injectable()
export class SchedulerService {
  constructor(
    private readonly crawlingService: CrawlingService,
    private readonly crawlingRepository: CrawlingRepository,
  ) {}
  private readonly logger = new Logger(SchedulerService.name);

  @Cron(CronExpression.EVERY_DAY_AT_NOON)
  async startCrawling() {
    this.logger.debug(`Scheduler service has been activated`);
    await this.crawlingRepository.deleteCrawledNews();
    await this.crawlingService.crawling();
  }
}