import { Injectable } from '@nestjs/common';
import { MysqlPrismaService } from '../../prisma/mysql.service';

@Injectable()
export class MailService {
  constructor(private readonly MysqlPrismaService: MysqlPrismaService) {}

  async sendMail(data: { dateStart: string; dateEnd: string }) {
    return data;
  }
}
