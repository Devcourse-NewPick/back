import { Controller, Body, Get } from '@nestjs/common';
import { OpenAiService } from './openai.service';
import { CrawlingService } from '../crawling/crawling.service';
@Controller('ai-summary')
export class AiSummaryController {
  constructor(
    private readonly openAiService: OpenAiService,
    private readonly crawlingService: CrawlingService,
  ) {}

  @Get('summarize')
  async summarize(@Body() data: { dateTo: number }) {
    const { dateTo } = data;
    const news = await this.crawlingService.findByDateRange(dateTo);
    const summary = await this.openAiService.summarizeText(news);
    return {
      newsIds: news.map((item) => item._id).toString(),
      summary: summary.summary,
      openaiResponse: summary.openai,
    };
  }

  @Get('get-news')
  async getNews(@Body() data: { dateTo: number }) {
    const { dateTo } = data;
    const news = await this.crawlingService.findByDateRange(dateTo);
    console.log(news.length);
    return news;
  }
}
