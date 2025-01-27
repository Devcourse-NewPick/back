import { Injectable, Logger } from '@nestjs/common';
import { OpenAI } from 'openai';
import { MysqlPrismaService } from '../../prisma/mysql.service';

@Injectable()
export class FindCategoryService {
  constructor(
    private readonly prisma: MysqlPrismaService,
    private readonly openai: OpenAI,
    private readonly logger: Logger,
  ) {}

  async findCategory(summary: string) {
    const startTime = Date.now();
    try {
      const categoryList = await this.prisma.newsCategory.findMany();

      const categoryResponse = await this.openai.chat.completions.create({
        model: 'gpt-4o-mini',
        messages: [
          {
            role: 'system',
            content:
              'You are an expert category classifier. Classify the following article into privided category list and only return the category name',
          },
          {
            role: 'user',
            content: `Classify the following article into privided \n\nArticle: ${summary}  \n\ncategory list: ${categoryList.map((item) => item.name).toString()}`,
          },
        ],
      });

      const categoryName = categoryResponse.choices[0].message.content;
      const categoryId = categoryList.find(
        (item) => item.name === categoryName,
      )?.id;

      const duration = (Date.now() - startTime) / 1000;

      await this.prisma.aiProcessLog.create({
        data: {
          newsId: '',
          processType: 'category',
          result: categoryName,
          duration: duration,
          status: 'success',
          error: null,
          token: categoryResponse.usage?.total_tokens,
        },
      });

      this.logger.debug(`카테고리 찾기 완료: ${categoryName}`);

      return {
        categoryId: categoryId, 
        categoryName: categoryName,
      };
    } catch (error) {
      this.logger.error(`카테고리 찾기 실패: ${error.message}`);
      await this.prisma.aiProcessLog.create({
        data: {
          newsId: '',
          processType: 'category',
          result: error.message,
          duration: 0,
          status: 'error',
          error: error.message,
          token: 0,
        },
      });
    }
  }
}
