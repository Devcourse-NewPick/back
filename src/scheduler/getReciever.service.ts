import { Injectable, Logger } from '@nestjs/common';
import { MysqlPrismaService } from '../../prisma/mysql.service';

@Injectable()
export class GetRecieverService {
  constructor(
    private readonly prisma: MysqlPrismaService,
    private readonly logger: Logger,
  ) {}

  async getReciever() {
    const recievers = await this.prisma.subscriber.findMany({
      include: {
        user: true,
      },
      where: {
        endAt: null,
      },
    });
    this.logger.debug(
      `수신자 목록을 가져왔습니다. 수신자 수: ${recievers.length}`,
    );
    return recievers.map((reciever) => reciever.user.email);
  }
}
