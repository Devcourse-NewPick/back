import { Module } from '@nestjs/common';
import { OpenAiService } from './openai.service';
import { AiSummaryController } from './ai-summary.controller';
import { CrawlingModule } from '../crawling/crawling.module';
import { PrismaModule } from '../../prisma/prisma.module';
import { FindCategoryService } from './findCategory.service';
import { CreateNewsletterService } from './createNewsletter.service';
import { CreateTitleService } from './createTitle.service';
import { Logger } from '@nestjs/common';
import OpenAI from 'openai';
@Module({
  imports: [CrawlingModule, PrismaModule],
  controllers: [AiSummaryController],
  providers: [
    {
      provide: OpenAI,
      useValue: new OpenAI({
        apiKey: process.env.OPENAI_API_KEY,
      }),
    },
    Logger,
    OpenAiService,
    FindCategoryService,
    CreateNewsletterService,
    CreateTitleService,
  ],
  exports: [
    OpenAiService,
    FindCategoryService,
    CreateNewsletterService,
    CreateTitleService,
    OpenAI,
    Logger,
  ],
})
export class AiSummaryModule {}
