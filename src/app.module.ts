import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { CrawlingModule } from './crawling/crawling.module';
import { AiSummaryModule } from './ai-summary/ai-summary.module';
import { NewsletterModule } from './newsletter/newsletter.module';
import { AiSummaryService } from './ai-summary/ai-summary.service';
import { FeedbackModule } from './feedback/feedback.module';

@Module({
  imports: [AuthModule, CrawlingModule, AiSummaryModule, NewsletterModule, FeedbackModule],
  controllers: [AppController],
  providers: [AppService, AiSummaryService],
})
export class AppModule {}
