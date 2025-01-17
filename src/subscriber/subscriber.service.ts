import { Injectable } from '@nestjs/common';
import { MysqlPrismaService } from 'prisma/mysql.service';

@Injectable()
export class SubscriberService {
  constructor(private readonly prisma: MysqlPrismaService) {}

  // 구독 시작
  async startSubscription(userId: number) {
    return await this.prisma.subscriber.create({
      data: {
        userId,
        startedAt: new Date(),
      },
    });
  }

  // 구독 종료
  async endSubscription(userId: number) {
    return await this.prisma.subscriber.updateMany({
      where: { userId, endAt: null },
      data: { endAt: new Date() },
    });
  }

  // 구독 상태 조회
  async getSubscriptionStatus(userId: number) {
    const subscription = await this.prisma.subscriber.findFirst({
      where: { userId, endAt: null },
    });
    return subscription ? { active: true } : { active: false };
  }
}
