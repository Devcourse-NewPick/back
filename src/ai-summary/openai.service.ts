import { Injectable, Logger } from '@nestjs/common';
import { OpenAI } from 'openai';
import { MysqlPrismaService } from '../../prisma/mysql.service';
import { FindCategoryService } from './findCategory.service';
import { CreateNewsletterService } from './createNewsletter.service';
import { CreateTitleService } from './createTitle.service';
import { CrawledNews } from 'src/crawling/schema/crawling.schema';
import { HTMLFormatterService } from './parseHtml.service';
import { BasicSummarizeService } from './basicSummarize.service';

@Injectable()
export class OpenAiService {
  private readonly logger = new Logger(OpenAiService.name);
  constructor(
    private readonly prisma: MysqlPrismaService,
    private readonly openai: OpenAI,
    private readonly findCategoryService: FindCategoryService,
    private readonly createNewsletterService: CreateNewsletterService,
    private readonly createTitleService: CreateTitleService,
    private readonly htmlFormatterService: HTMLFormatterService,
    private readonly basicSummarizeService: BasicSummarizeService,
  ) {}

  async summarizeText(
    news: CrawledNews[],
    categoryId: number,
    test: boolean,
  ): Promise<{
    summary: string;
    openai: any;
    categoryId: number;
    newsletter: any;
  }> {
    if (news.length === 0) {
      this.logger.error('No news found');
      throw new Error('No news found');
    }
    const startTime = Date.now();
    const newsText =
      news.map((item) => item.title).join('\n') +
      '\n' +
      news.map((item) => item.content).join('\n');
    try {
      const response = await this.basicSummarizeService.basicSummarize(
        newsText,
        1000,
        1500,
      );

      const summary = response.choices[0].message.content;
      const token = response.usage?.total_tokens;
      const duration = (Date.now() - startTime) / 1000;
      const newslinks = news.map((item) => item.link).toString();
      this.logger.debug(`요약 완료: ${summary.length}자`);

      await this.prisma.aiProcessLog.create({
        data: {
          newsId: test ? 'test' : newslinks,
          processType: 'summarization',
          result: summary,
          duration: duration,
          status: 'success',
          token: token,
          error: null,
        },
      });

      const title = await this.createTitleService.createTitle(summary);
      const html = await this.htmlFormatterService.formatHtml(summary);

      const newsletterTemporary = {
        title: title,
        summary: summary,
        newslinks: newslinks,
        categoryId: categoryId,
        html: html,
      };

      if (test) {
        return {
          summary,
          openai: response,
          categoryId,
          newsletter: newsletterTemporary,
        };
      }
      const newsletter = await this.createNewsletterService.createNewsletter(
        title,
        summary,
        newslinks,
        categoryId,
        html,
        news.map((item) => item.images).toString(),
      );

      return { summary, openai: response, categoryId, newsletter };
    } catch (error) {
      const duration = (Date.now() - startTime) / 1000;
      const newsIds = news.map((item) => item._id).toString();
      await this.prisma.aiProcessLog.create({
        data: {
          newsId: test ? 'test' : newsIds,
          processType: 'summarization',
          result: error.message,
          duration: duration,
          status: 'error',
          error: error.message,
          token: 0,
        },
      });

      this.logger.error(`요약 실패: ${error.message}`);
      throw new Error('Summarization failed.');
    }
  }
}
