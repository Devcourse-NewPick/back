import { Injectable } from '@nestjs/common';
import { OpenAI } from 'openai';
import { MysqlPrismaService } from '../../prisma/mysql.service';

export interface News {
  _id?: string;
  title: string;
  content: string;
  source: string;
  countryCode: string;
  publishedAt: Date;
  categoryName: string[];
  img: string;
}

@Injectable()
export class OpenAiService {
  private openai: OpenAI;

  constructor(private prisma: MysqlPrismaService) {
    this.openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });
  }

  async summarizeText(news: News[]): Promise<{ summary: string; openai: any }> {
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

      return { summary, openai: response };
    } catch (error) {
      const duration = (Date.now() - startTime) / 1000;
      await this.prisma.aiProcessLog.create({
        data: {
          newsId: '',
          processType: 'summarization',
          result: error.message,
          duration: duration,
          status: 'error',
          error: error.message,
          token: 0,
        },
      });

      throw new Error('Summarization failed.');
    }
  }
}
