import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { SchedulerService } from './scheduler.service';
import { CrawlingModule } from 'src/crawling/crawling.module';

@Module({
  imports: [
    CrawlingModule,
    ScheduleModule.forRoot(),
  ],
  providers: [SchedulerService]
})
export class SchedulerModule {}