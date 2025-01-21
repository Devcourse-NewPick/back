import { Injectable, Logger } from '@nestjs/common';
import { OpenAI } from 'openai';
import { MysqlPrismaService } from '../../prisma/mysql.service';

@Injectable()
export class CreateTitleService {
  constructor(
    private readonly openai: OpenAI,
    private readonly prisma: MysqlPrismaService,
    private readonly logger: Logger,
  ) {}

  async createTitle(summary: string) {
    const startTime = Date.now();
    try {
      const titleResponse = await this.openai.chat.completions.create({
        model: 'gpt-4o-mini',
        messages: [
          {
            role: 'system',
            content:
              'You are an expert title creator. Create a title for the following article',
          },
          {
            role: 'user',
            content: `Create a title for the following article \n\nArticle: ${summary}`,
          },
        ],
      });

      const title = titleResponse.choices[0].message.content;

      await this.prisma.aiProcessLog.create({
        data: {
          newsId: '',
          processType: 'title',
          result: title,
          duration: (Date.now() - startTime) / 1000,
          status: 'success',
          error: null,
          token: titleResponse.usage?.total_tokens,
        },
      });
      this.logger.debug(`제목 생성 완료: ${title}`);

      return title;
    } catch (error) {
      this.logger.error(`제목 생성 실패: ${error.message}`);
      throw new Error('Title creation failed.' + error.message);
    }
  }
}
