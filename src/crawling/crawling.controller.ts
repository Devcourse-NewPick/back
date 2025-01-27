import { Controller, Get } from '@nestjs/common';
import { CrawlingService } from './crawling.service';
import { CrawlingRepository } from './crawling.repository';

@Controller('crawling')
export class CrawlingController {
  constructor(
    private readonly crawlingService: CrawlingService,
    private readonly crawlingRepository: CrawlingRepository,
  ) {}

  @Get()
  async getCrawledNews() {
    return await this.crawlingRepository.getLatestCrawledNews();
  }

  @Get('crawling')
  async crawling() {
    return this.crawlingService.crawling();
  }

  @Get('crawling-detail')
  async crawlingDetail() {
    const news = await this.crawlingRepository.getLatestCrawledNews();
    const oldNews = await this.crawlingRepository.getOldestCrawledNews();
    return { news: news.createdAt, oldNews: oldNews.createdAt };
  }
}
