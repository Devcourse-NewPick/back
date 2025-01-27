import { MysqlPrismaService } from '../../prisma/mysql.service';
import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';

@Injectable()
export class NewsletterRepo {
  constructor(private readonly prisma: MysqlPrismaService) {}

  async getNewsletter(offset: number, limit: number) {
    return this.prisma.newsletter.findMany({
      skip: offset,
      take: limit,
    });
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
