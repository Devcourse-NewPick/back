import { Controller, Body, Post } from '@nestjs/common';
import { OpenAiService } from './openai.service';
import { CrawlingRepository } from 'src/crawling/crawling.repository';
import { Logger } from '@nestjs/common';
import { BasicSummarizeService } from './basicSummarize.service';
@Controller('ai-summary')
export class AiSummaryController {
  constructor(
    private readonly openAiService: OpenAiService,
    private readonly crawlingRepository: CrawlingRepository,
    private readonly logger: Logger,
    private readonly basicSummarizeService: BasicSummarizeService,
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
      news.dateStart,
      news.dateEnd,
      `검색된 뉴스 수: ${news.news.length}`,
    );
    if (news.news.length === 0) {
      this.logger.error('No news found');
      throw new Error('No news found');
      return {
        success: false,
        message: 'No news found',
      };
    }
    const summary = await this.basicSummarizeService.basicSummarize(
      news.news.map((item) => item.content).join('\n\n'),
      500,
      1000,
    );
    return {
      newsLinks: news.news.map((item) => item.link).toString(),
      summary: summary.choices[0].message.content,
      openaiResponse: summary,
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
