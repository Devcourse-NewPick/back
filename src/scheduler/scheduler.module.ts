import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { SchedulerService } from './scheduler.service';
import { SchedulerController } from './scheduler.controller';
import { MailModule } from 'src/mail/mail.module';
import { MailService } from 'src/mail/mail.service';
import { CrawlingModule } from 'src/crawling/crawling.module';
import { AiSummaryModule } from 'src/ai-summary/ai-summary.module';
import { SubscriberModule } from 'src/subscriber/subscriber.module';
import { CategoryModule } from 'src/category/category.module';
import { BasicRepositoryModule } from 'src/repository/module';

@Module({
  imports: [
    MailModule,
    CrawlingModule,
    AiSummaryModule,
    SubscriberModule,
    ScheduleModule.forRoot(),
    CategoryModule,
    BasicRepositoryModule,
  ],
  providers: [SchedulerService, MailService],
  controllers: [SchedulerController],
})
export class SchedulerModule {}
