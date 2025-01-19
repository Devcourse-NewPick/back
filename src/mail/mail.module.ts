import { Module } from '@nestjs/common';
import { MailService } from './mail.service';
import { MailController } from './mail.controller';
import { MysqlPrismaService } from '../../prisma/mysql.service';

@Module({
  providers: [MailService, MysqlPrismaService],
  controllers: [MailController],
})
export class MailModule {}
