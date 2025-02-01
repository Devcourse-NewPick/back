import {
  Injectable,
  NotFoundException,
  ConflictException,
  Logger,
} from '@nestjs/common';
import { MysqlPrismaService } from 'prisma/mysql.service'; // MysqlPrismaService 사용
@Injectable()
export class SubscriberService {
  constructor(
    private readonly logger: Logger,
    private readonly prisma: MysqlPrismaService,
  ) {}

  /**
   * 구독 시작
   * @param userId 사용자 ID
   */
  async startSubscription(userId: number) {
    // 유저 존재 여부 확인
    const userExists = await this.prisma.user.findUnique({
      where: { id: userId },
    });

    if (!userExists) {
      throw new NotFoundException(`User with ID ${userId} does not exist.`);
    }

    // 중복 구독 방지
    const existingSubscription = await this.prisma.subscriber.findUnique({
      where: { userId },
    });

    if (existingSubscription && existingSubscription.status === 'active') {
      throw new ConflictException('User is already subscribed.');
    }

    // 구독 생성 또는 기존 구독 갱신
    return existingSubscription
      ? this.prisma.subscriber.update({
          where: { id: existingSubscription.id },
          data: { startedAt: new Date(), endAt: null, status: 'active' },
        })
      : this.prisma.subscriber.create({
          data: {
            userId,
            startedAt: new Date(),
            status: 'active',
          },
        });
  }

  /**
   * 구독 일시정지
   * @param userId 사용자 ID
   */
  async pauseSubscription(userId: number) {
    const subscription = await this.prisma.subscriber.findFirst({
      where: { userId, status: 'active' },
    });

    if (!subscription) {
      throw new NotFoundException(
        'No active subscription found for this user.',
      );
    }

    return this.prisma.subscriber.update({
      where: { id: subscription.id },
      data: { status: 'paused' },
    });
  }

  /**
   * 구독 해지
   * @param userId 사용자 ID
   */
  async cancelSubscription(userId: number) {
    const subscription = await this.prisma.subscriber.findFirst({
      where: { userId },
    });

    if (!subscription) {
      throw new NotFoundException('No subscription found for this user.');
    }

    // 구독 취소 (데이터 삭제)
    await this.prisma.user.update({
      where: { id: userId },
      data: { interests: null },
    });

    await this.prisma.feedback.deleteMany({ where: { userId } });

    return this.prisma.subscriber.update({
      where: { id: subscription.id },
      data: { status: 'cancelled', endAt: new Date() },
    });
  }

  /**
   * 현재 구독 상태 조회
   * @param userId 사용자 ID
   */
  async getSubscriptionStatus(userId: number) {
    const subscription = await this.prisma.subscriber.findFirst({
      where: { userId, status: { in: ['active', 'paused'] } },
    });

    if (!subscription) {
      return { active: false, status: 'none' };
    }

    return {
      active: subscription.status === 'active',
      status: subscription.status,
    };
  }

  /**
   * 구독 기록 조회
   * @param userId 사용자 ID
   */
  async getSubscriptionHistory(userId: number) {
    const userExists = await this.prisma.user.findUnique({
      where: { id: userId },
    });

    if (!userExists) {
      throw new NotFoundException(`User with ID ${userId} does not exist.`);
    }

    return this.prisma.subscriber.findMany({
      where: { userId },
      orderBy: { startedAt: 'desc' },
    });
  }

  /**
   * 구독자 목록 조회
   */
  async getSubscribers(): Promise<
    {
      email: string;
      interests: number[];
      name: string;
    }[]
  > {
    const recievers = await this.prisma.subscriber.findMany({
      include: {
        user: true,
      },
      where: {
        status: 'active',
      },
    });

    this.logger.debug(
      `수신자 목록을 가져왔습니다. 수신자 수: ${recievers.length}`,
    );
    const subscribersWithInterest = recievers.map((reciever) => {
      return {
        email: reciever.user.email,
        interests: reciever.user.interests as number[],
        name: reciever.user.username,
      };
    });

    return subscribersWithInterest;
  }
}
