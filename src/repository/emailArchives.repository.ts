import { Injectable } from '@nestjs/common';
import { MysqlPrismaService } from '../../prisma/mysql.service';

@Injectable()
export class EmailArchivesRepo {
  constructor(private readonly prisma: MysqlPrismaService) {}

  async getEmailArchives(offset: number, limit: number) {
    return this.prisma.emailArchive.findMany({
      skip: offset,
      take: limit,
    });
  }

  async getEmailArchivesById(id: number) {
    return this.prisma.emailArchive.findUnique({
      where: { id },
    });
  }

  async deleteEmailArchives(id: number) {
    return this.prisma.emailArchive.delete({
      where: { id },
    });
  }
}
