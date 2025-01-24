import { Controller, Get } from '@nestjs/common';
import { CrawlingRepository } from './crawling.repository';

@Controller('crawling')
export class CrawlingController {
  constructor(
    private readonly crawlingRepository: CrawlingRepository,
  ) {}

  @Get()
  async getCrawledNews() {
    return await this.crawlingRepository.getLatestCrawledNews();
  }
}
