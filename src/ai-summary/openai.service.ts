import { Injectable, Logger } from '@nestjs/common';
import { OpenAI } from 'openai';
import { MysqlPrismaService } from '../../prisma/mysql.service';
import { FindCategoryService } from './findCategory.service';
import { CreateNewsletterService } from './createNewsletter.service';
import { CreateTitleService } from './createTitle.service';
import { CrawledNews } from 'src/crawling/schema/crawling.schema';

// export interface News {
//   _id?: string;
//   title: string;
//   content: string;
//   source: string;
//   countryCode: string;
//   publishedAt: Date;
//   categoryName: string[];
//   img: string;
// }

@Injectable()
export class OpenAiService {
  private readonly logger = new Logger(OpenAiService.name);
  constructor(
    private readonly prisma: MysqlPrismaService,
    private readonly openai: OpenAI,
    private readonly findCategoryService: FindCategoryService,
    private readonly createNewsletterService: CreateNewsletterService,
    private readonly createTitleService: CreateTitleService,
  ) {}

  async summarizeText(news: CrawledNews[]): Promise<{
    summary: string;
    openai: any;
    categoryId: number;
    newsletter: any;
  }> {
    const startTime = Date.now();

    try {
      const response = await this.openai.chat.completions.create({
        model: 'gpt-4o-mini',
        messages: [
          {
            role: 'system',
            content:
              'You are an expert summarizer. Summarize articles into Korean',
          },
          {
            role: 'user',
            content: `Summarize the following text into a concise paragraph of 500-1000 words:\n\n${news.map((item) => item.title).join('\n')}\n\n${news.map((item) => item.content).join('\n')}`,
          },
        ],
        temperature: 0.5,
      });

      const summary = response.choices[0].message.content;
      const token = response.usage?.total_tokens;
      const duration = (Date.now() - startTime) / 1000;
      const newsId = news.map((item) => item._id).toString();
      console.log(response);

      await this.prisma.aiProcessLog.create({
        data: {
          newsId: newsId,
          processType: 'summarization',
          result: summary,
          duration: duration,
          status: 'success',
          token: token,
          error: null,
        },
      });

      const categoryId = await this.findCategoryService.findCategory(summary);
      const title = await this.createTitleService.createTitle(summary);

      const newsletter = await this.createNewsletterService.createNewsletter(
        title,
        summary,
        newsId,
        categoryId,
      );

      this.logger.debug(`요약 완료: ${newsletter.id}`);

      return { summary, openai: response, categoryId, newsletter };
    } catch (error) {
      const duration = (Date.now() - startTime) / 1000;
      const newsId = news.map((item) => item._id).toString();
      await this.prisma.aiProcessLog.create({
        data: {
          newsId: newsId,
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
