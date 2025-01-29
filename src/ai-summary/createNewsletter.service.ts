import { Injectable, Logger } from '@nestjs/common';
import { MysqlPrismaService } from '../../prisma/mysql.service';
import { Newsletter } from '@prisma/client';

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
    contentAsHTML: string,
    imgUrl: string,
  ): Promise<Newsletter> {
    const newsletter = await this.prisma.newsletter.create({
      data: {
        title: title,
        content: summary,
        contentAsHTML,
        categoryId: categoryId,
        createdAt: new Date(),
        usedNews,
        viewcount: 0,
        imageUrl: imgUrl,
      },
    });

    this.logger.debug(`뉴스레터 생성 완료: ${newsletter.id}`);

    return newsletter;
  }
}
