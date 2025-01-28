import { forwardRef, Module } from '@nestjs/common';
import { OpenAiService } from './openai.service';
import { AiSummaryController } from './ai-summary.controller';
import { CrawlingModule } from '../crawling/crawling.module';
import { PrismaModule } from '../../prisma/prisma.module';
import { FindCategoryService } from './findCategory.service';
import { CreateNewsletterService } from './createNewsletter.service';
import { CreateTitleService } from './createTitle.service';
import { Logger } from '@nestjs/common';
import OpenAI from 'openai';
import { HTMLFormatterService } from './parseHtml.service';
@Module({
  imports: [
    PrismaModule,
    forwardRef(() => CrawlingModule),
  ],
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
    HTMLFormatterService,
  ],
  exports: [
    OpenAiService,
    FindCategoryService,
    CreateNewsletterService,
    CreateTitleService,
    HTMLFormatterService,
    OpenAI,
    Logger,
  ],
})
export class AiSummaryModule {}
