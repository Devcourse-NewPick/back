import { Module } from '@nestjs/common';
import { CrawlingService } from './crawling.service';

@Module({
  providers: [CrawlingService],
  exports: [CrawlingService], // 필요한 경우 외부에서 사용할 수 있도록 내보냄
})
export class CrawlingModule {}
