import { Controller, Get } from '@nestjs/common';
import { CrawlingService } from './crawling.service';
import { CrawlingRepository } from './crawling.repository';

@Controller('crawling')
export class CrawlingController {
  constructor(
    private readonly crawlingService: CrawlingService,
    private readonly crawlingRepository: CrawlingRepository,
  ) {}
  // 크롤링 테스트
  // @Get()
  // async crawling() {
  //   return await this.crawlingService.crawling();
  // }
  // 크롤링 데이터 
  @Get()
  async crawlingDetail() {
    const news = await this.crawlingRepository.getLatestCrawledNews();
    const oldNews = await this.crawlingRepository.getOldestCrawledNews();
    return { news: news.createdAt, oldNews: oldNews.createdAt };
  }
}
