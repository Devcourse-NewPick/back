import { Module } from '@nestjs/common';
import { OpenAiService } from './openai.service';

@Module({
  exports: [OpenAiService],
  providers: [OpenAiService],
})
export class AiSummaryModule {}
