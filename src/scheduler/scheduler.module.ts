import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { SchedulerService } from './scheduler.service';
import { CrawlingModule } from 'src/crawling/crawling.module';
import { MailModule } from 'src/mail/mail.module';
import { GetRecieverService } from './getReciever.service';
import { MailService } from 'src/mail/mail.service';
import { SchedulerController } from './scheduler.controller';
import { Logger } from '@nestjs/common';
import { AiSummaryModule } from 'src/ai-summary/ai-summary.module';

@Module({
  imports: [
    CrawlingModule,
    ScheduleModule.forRoot(),
    MailModule,
    AiSummaryModule,
  ],
  providers: [SchedulerService, GetRecieverService, MailService, Logger],
  controllers: [SchedulerController],
})
export class SchedulerModule {}
