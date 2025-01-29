import { Controller, Body, Post } from '@nestjs/common';
import { OpenAiService } from './openai.service';
import { CrawlingRepository } from 'src/crawling/crawling.repository';
import { Logger } from '@nestjs/common';

@Controller('ai-summary')
export class AiSummaryController {
  constructor(
    private readonly openAiService: OpenAiService,
    private readonly crawlingRepository: CrawlingRepository,
    private readonly logger: Logger,
  ) {}

  @Post('summarize')
  async summarize(
    @Body() data: { dateStart: string; dateEnd: string; categoryId: number },
  ) {
    const { dateStart, dateEnd, categoryId } = data;
    const news = await this.crawlingRepository.getCrawledNews(
      dateStart,
      dateEnd,
      categoryId,
    );
    this.logger.debug(
      `dateStart: ${dateStart}, dateEnd: ${dateEnd}, categoryId: ${categoryId}, 검색된 뉴스 수: ${news.news.length}`,
    );
    if (news.news.length === 0) {
      this.logger.error('No news found');
      throw new Error('No news found');
    }
    const result = await this.openAiService.summarizeText(
      news.news,
      categoryId,
    );
    return {
      newsletter: result.newsletter,
      openaiResponse: result.openai,
    };
  }

  @Post('get-news')
  async getNews(
    @Body() data: { dateStart: string; dateEnd: string; categoryId: number },
  ) {
    const { dateStart, dateEnd, categoryId } = data;
    const news = await this.crawlingRepository.getCrawledNews(
      dateStart,
      dateEnd,
      categoryId,
    );
    return {
      count: news.news.length,
      news: news.news,
    };
  }
}
