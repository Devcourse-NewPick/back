import { Module } from '@nestjs/common';
import { AiSummaryService } from './ai-summary.service';

@Module({
  exports: [AiSummaryService],
  providers: [AiSummaryService],
})
export class AiSummaryModule {}
