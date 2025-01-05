import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { CrawlingModule } from './crawling/crawling.module';
import { AiSummaryModule } from './ai-summary/ai-summary.module';
import { NewsletterModule } from './newsletter/newsletter.module';

@Module({
  imports: [AuthModule, CrawlingModule, AiSummaryModule, NewsletterModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
