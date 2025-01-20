import { Controller, Body, Post } from '@nestjs/common';
import { OpenAiService } from './openai.service';
import { CrawlingRepository } from 'src/crawling/crawling.repository';

@Controller('ai-summary')
export class AiSummaryController {
  constructor(
    private readonly openAiService: OpenAiService,
    private readonly crawlingRepository: CrawlingRepository,
  ) {}

  @Post('summarize')
  async summarize(@Body() data: { dateStart: string; dateEnd: string }) {
    const { dateStart, dateEnd } = data;
    const news = await this.crawlingRepository.getCrawledNews(dateStart, dateEnd);
    const summary = await this.openAiService.summarizeText(news);
    return {
      newsIds: news.map((item) => item._id).toString(),
      summary: summary.summary,
      openaiResponse: summary.openai,
    };
  }

  @Post('get-news')
  async getNews(@Body() data: { dateStart: string; dateEnd: string }) {
    const { dateStart, dateEnd } = data;
    const news = await this.crawlingRepository.getCrawledNews(dateStart, dateEnd);
    return {
      count: news.length,
      news,
    };
  }
}
