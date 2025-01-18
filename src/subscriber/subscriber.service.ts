import { Injectable, NotFoundException } from '@nestjs/common';
import { MysqlPrismaService } from 'prisma/mysql.service'; // PrismaService를 통한 DB 접근

@Injectable()
export class SubscriberService {
  constructor(private readonly prisma: MysqlPrismaService) {}

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
}
