import { MysqlPrismaService } from '../../prisma/mysql.service';
import { Injectable } from '@nestjs/common';
import { Prisma, Newsletter } from '@prisma/client';
import dayjs from 'dayjs';

@Injectable()
export class NewsletterRepo {
  constructor(private readonly prisma: MysqlPrismaService) {}

  async getNewsletterList(
    offset: number,
    limit: number,
    startDate: Date | null,
    endDate: Date | null,
    trend?: boolean,
  ) {
    const whereClause: any = {};

    if (startDate && endDate) {
      whereClause.createdAt = {
        gte: dayjs(startDate).startOf('day').toDate(),
        lte: dayjs(endDate).endOf('day').toDate(),
      };
    }

    const result = await this.prisma.newsletter.findMany({
      where: whereClause,
      select: {
        id: true,
        title: true,
        imageUrl: true,
        categoryId: true,
        viewcount: true,
        createdAt: true,
        content: true,
      },
      skip: offset,
      take: limit,
      ...(trend && { orderBy: { viewcount: trend ? 'desc' : 'asc' } }),
    });

    return result;
  }

  async getNewsletter(offset: number, limit: number, trend?: boolean) {
    if (trend) {
      const orderBy = trend ? 'desc' : 'asc';
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

  async getNewsletterByCategoryId(
    categoryId: number,
    offset: number,
    limit: number,
  ) {
    return this.prisma.newsletter.findMany({
      where: { categoryId },
      skip: offset,
      take: limit,
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
  async getNewsletterByDateRange(dateStart: Date, dateEnd: Date) {
    return this.prisma.newsletter.findMany({
      where: { createdAt: { gte: dateStart, lte: dateEnd } },
    });
  }

  async getNewsletterByCategoryIdAndDate(
    dateStart: Date,
    dateEnd: Date,
    categoryId?: number,
  ): Promise<Newsletter[]> {
    if (categoryId) {
      return this.prisma.newsletter.findMany({
        where: {
          categoryId,
          createdAt: { gte: dateStart, lte: dateEnd },
        },
      });
    } else {
      return this.prisma.newsletter.findMany({
        where: { createdAt: { gte: dateStart, lte: dateEnd } },
      });
    }
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

  /**
   * 어제의 시작/종료 시간을 계산하는 헬퍼 메서드
   */
  private getYesterdayRange(): { start: Date; end: Date } {
    const now = new Date();
    const yesterday = new Date(now);
    yesterday.setDate(now.getDate() - 1);
    const start = new Date(yesterday);
    start.setHours(0, 0, 0, 0);
    const end = new Date(yesterday);
    end.setHours(23, 59, 59, 999);
    return { start, end };
  }

  /**
   * 특정 카테고리에 대해 어제 작성된 뉴스레터 중 가장 최근의 하나를 조회
   */
  async getNewsletterFromYesterdayByCategory(
    categoryId: number,
  ): Promise<Newsletter | null> {
    const { start, end } = this.getYesterdayRange();
    return this.prisma.newsletter.findFirst({
      where: {
        categoryId,
        createdAt: { gte: start, lte: end },
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  /**
   * 모든 카테고리에 대해 어제 작성된 뉴스레터가 존재하는 카테고리별로
   * 가장 최근의 뉴스레터 한 건씩 조회
   */
  async getNewslettersFromYesterdayForAllCategories() {
    const { start, end } = this.getYesterdayRange();

    // 어제 생성된 뉴스레터가 있는 각 카테고리의 목록을 distinct 하게 조회
    const categories = await this.prisma.newsletter.findMany({
      where: { createdAt: { gte: start, lte: end } },
      select: { categoryId: true },
      distinct: ['categoryId'],
    });

    const newsletters: Newsletter[] = [];
    // 각 카테고리별로 가장 최근의 뉴스레터 한 건씩 조회
    for (const { categoryId } of categories) {
      const newsletter =
        await this.getNewsletterFromYesterdayByCategory(categoryId);
      if (newsletter) {
        newsletters.push(newsletter);
      }
    }
    return newsletters;
  }

  async getRandomNewsletters(
    dateStart: Date,
    dateEnd: Date,
    num: number,
  ): Promise<Newsletter[]> {
    return this.prisma.newsletter.findMany({
      where: {
        createdAt: {
          gte: dateStart,
          lte: dateEnd,
        },
      },
      take: Number(num),
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async addViewcount(id: number) {
    id = Number(id);
    return this.prisma.newsletter.update({
      where: { id },
      data: { viewcount: { increment: 1 } },
    });
  }
  async resetViewcount(id: number) {
    id = Number(id);
    return this.prisma.newsletter.update({
      where: { id },
      data: { viewcount: 0 },
    });
  }
}
