import { Injectable } from '@nestjs/common';
import { MysqlPrismaService } from '../../prisma/mysql.service';

@Injectable()
export class AiProcessingLogRepo {
  constructor(private readonly prisma: MysqlPrismaService) {}

  async getAiProcessingLog(offset: number, limit: number) {
    return this.prisma.aiProcessLog.findMany({
      skip: offset,
      take: limit,
    });
  }

  async getAiProcessingLogById(id: number) {
    return this.prisma.aiProcessLog.findUnique({
      where: { id },
    });
  }

  async deleteAiProcessingLog(id: number) {
    return this.prisma.aiProcessLog.delete({
      where: { id },
    });
  }
}
