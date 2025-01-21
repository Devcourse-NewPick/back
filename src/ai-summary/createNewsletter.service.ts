import { Injectable, Logger } from '@nestjs/common';
import { MysqlPrismaService } from '../../prisma/mysql.service';

@Injectable()
export class CreateNewsletterService {
  constructor(
    private readonly prisma: MysqlPrismaService,
    private readonly logger: Logger,
  ) {}

  async createNewsletter(
    title: string,
    summary: string,
    usedNews: string,
    categoryId: number,
  ) {
    const newsletter = await this.prisma.newsletter.create({
      data: {
        title: title,
        content: summary,
        categoryId: categoryId,
        userId: null,
        createdAt: new Date(),
        usedNews,
        viewcount: 0,
      },
    });

    this.logger.debug(`뉴스레터 생성 완료: ${newsletter.id}`);

    return newsletter;
  }
}
