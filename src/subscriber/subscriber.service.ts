import { Injectable, NotFoundException } from '@nestjs/common';
import { MysqlPrismaService } from 'prisma/mysql.service'; // MysqlPrismaService 사용

@Injectable()
export class SubscriberService {
  constructor(private readonly prisma: MysqlPrismaService) {}

  // 구독 시작
  async startSubscription(userId: number) {
    const userExists = await this.prisma.user.findUnique({
      where: { id: userId },
    });

    if (!userExists) {
      throw new NotFoundException(`User with ID ${userId} does not exist.`);
    }

    return await this.prisma.subscriber.create({
      data: {
        userId,
        startedAt: new Date(),
      },
    });
  }

  // 구독 종료
  async endSubscription(userId: number) {
    const userExists = await this.prisma.user.findUnique({
      where: { id: userId },
    });

    if (!userExists) {
      throw new NotFoundException(`User with ID ${userId} does not exist.`);
    }

    return await this.prisma.subscriber.updateMany({
      where: { userId, endAt: null },
      data: { endAt: new Date() },
    });
  }

  // 현재 구독 상태 조회
  async getSubscriptionStatus(userId: number) {
    const userExists = await this.prisma.user.findUnique({
      where: { id: userId },
    });

    if (!userExists) {
      throw new NotFoundException(`User with ID ${userId} does not exist.`);
    }

    const subscription = await this.prisma.subscriber.findFirst({
      where: { userId, endAt: null },
    });

    return subscription ? { active: true } : { active: false };
  }

  // 전체 구독 기록 조회
  async getSubscriptionHistory(userId: number) {
    const userExists = await this.prisma.user.findUnique({
      where: { id: userId },
    });

    if (!userExists) {
      throw new NotFoundException(`User with ID ${userId} does not exist.`);
    }

    return await this.prisma.subscriber.findMany({
      where: { userId },
      orderBy: { startedAt: 'desc' },
    });
  }
}
