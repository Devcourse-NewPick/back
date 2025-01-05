import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { CrawlingModule } from './crawling/crawling.module';
import { AiSummaryModule } from './ai-summary/ai-summary.module';
import { NewsletterModule } from './newsletter/newsletter.module';
import { AiSummaryService } from './ai-summary/ai-summary.service';

@Module({
  imports: [AuthModule, CrawlingModule, AiSummaryModule, NewsletterModule],
  controllers: [AppController],
  providers: [AppService, AiSummaryService],
})
export class AppModule {}
