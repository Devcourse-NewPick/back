import { MysqlPrismaService } from '../../prisma/mysql.service';
import { Injectable } from '@nestjs/common';
import { Prisma, Newsletter } from '@prisma/client';

@Injectable()
export class NewsletterRepo {
  constructor(private readonly prisma: MysqlPrismaService) {}

  async getNewsletter(offset: number, limit: number, popular?: boolean) {
    if (popular) {
      const orderBy = popular ? 'desc' : 'asc';
      return this.prisma.newsletter.findMany({
        skip: offset,
        take: limit,
        orderBy: {
          viewcount: orderBy,
        },
      });
    } else {
      return this.prisma.newsletter.findMany({
        skip: offset,
        take: limit,
      });
    }
  }

  async getNewsletterById(id: number) {
    return this.prisma.newsletter.findUnique({
      where: { id },
    });
  }

  async getNewsletterByCategoryId(categoryId: number) {
    return this.prisma.newsletter.findMany({
      where: { categoryId },
    });
  }

  async getPreviousNewsletter(newsletterId: number, dateStart: Date) {
    return this.prisma.newsletter.findFirst({
      where: { id: { lt: newsletterId }, createdAt: { lt: dateStart } },
      orderBy: { createdAt: 'desc' },
    });
  }

  async getNextNewsletter(newsletterId: number, dateStart: Date) {
    return this.prisma.newsletter.findFirst({
      where: { id: { gt: newsletterId }, createdAt: { gt: dateStart } },
      orderBy: { createdAt: 'asc' },
    });
  }

  async getNewsletterByCategoryIdAndDate(
    categoryId: number,
    dateStart: Date,
    dateEnd: Date,
  ): Promise<Newsletter[]> {
    return this.prisma.newsletter.findMany({
      where: {
        categoryId,
        createdAt: { gte: dateStart, lte: dateEnd },
      },
    });
  }
  async deleteNewsletter(id: number) {
    return this.prisma.newsletter.delete({
      where: { id },
    });
  }

  async updateNewsletter(id: number, data: Prisma.NewsletterUpdateInput) {
    return this.prisma.newsletter.update({
      where: { id },
      data,
    });
  }
}
