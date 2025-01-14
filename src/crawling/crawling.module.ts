import { Module } from '@nestjs/common';
import { CrawlingService } from './crawling.service';
import { CrawlingController } from './crawling.controller';

@Module({
  providers: [CrawlingService],
  exports: [CrawlingService],
  controllers: [CrawlingController],
})
export class CrawlingModule {}