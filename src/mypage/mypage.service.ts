import { Injectable, NotFoundException } from '@nestjs/common';
import { MysqlPrismaService } from 'prisma/mysql.service';

@Injectable()
export class MyPageService {
  constructor(private readonly prisma: MysqlPrismaService) {}

  // 사용자 프로필 조회
  async getProfile(userId: number) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        email: true,
        username: true,
        profileImg: true,
        interests: true,
        timezone: true,
      },
    });

    if (!user) {
      throw new NotFoundException(`User with ID ${userId} not found.`);
    }

    return user;
  }

  // 북마크(좋아요) 조회
  async getBookmarks(userId: number) {
    return this.prisma.feedback.findMany({
      where: { userId, likes: true },
      select: {
        newsId: true, // 개별 뉴스 ID
        newsletterId: true, // 뉴스레터 ID
        comments: true,
        createdAt: true,
      },
    });
  }

  // 현재 구독 상태 확인
  async getSubscriptionStatus(userId: number) {
    const subscription = await this.prisma.subscriber.findFirst({
      where: { userId, endAt: null }, // 활성 구독만 조회
    });

    return subscription ? { active: true } : { active: false };
  }

  // 전체 구독 기록 조회
  async getSubscriptionHistory(userId: number) {
    const subscriptions = await this.prisma.subscriber.findMany({
      where: { userId },
      orderBy: { startedAt: 'desc' }, // 최신순 정렬
      select: {
        id: true,
        startedAt: true,
        endAt: true,
      },
    });

    if (subscriptions.length === 0) {
      throw new NotFoundException(
        `No subscriptions found for User ID ${userId}`,
      );
    }

    return subscriptions;
  }
}
