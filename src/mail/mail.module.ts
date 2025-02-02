import { Module } from '@nestjs/common';
import { MailService } from './mail.service';
import { MailController } from './mail.controller';
import { PrismaModule } from '../../prisma/prisma.module';
import { Logger } from '@nestjs/common';
import { NODEMAILER, NODEMAILER_CONFIG } from './constants';
import { MysqlPrismaService } from '../../prisma/mysql.service';
import { AiSummaryModule } from '../ai-summary/ai-summary.module';

@Module({
  imports: [PrismaModule, AiSummaryModule],
  controllers: [MailController],
  providers: [
    MailService,
    MysqlPrismaService,
    {
      provide: Logger,
      useClass: Logger,
    },
    {
      provide: NODEMAILER,
      useValue: NODEMAILER_CONFIG,
    },
  ],
  exports: [MailService, NODEMAILER],
})
export class MailModule {}
