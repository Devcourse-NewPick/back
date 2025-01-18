import { Module } from '@nestjs/common';
import { OpenAiService } from './openai.service';
import { AiSummaryController } from './ai-summary.controller';
import { CrawlingModule } from '../crawling/crawling.module';
import { PrismaModule } from '../../prisma/prisma.module';
import { PrismaClient } from '@prisma/client';
@Module({
  imports: [CrawlingModule, PrismaModule],
  controllers: [AiSummaryController],
  providers: [OpenAiService, PrismaClient],
  exports: [OpenAiService],
})
export class AiSummaryModule {}
