import { Body, Controller, Get } from '@nestjs/common';
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
    return await this.crawlingService.crawling();
  }

  @Get('news')
  async getCrawledData(@Body() data: { dateStart: string; dateEnd: string }) {
    const { dateStart, dateEnd } = data;
    return await this.crawlingRepository.getCrawledNews(dateStart, dateEnd);
  }
}
