import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CrawlingModule } from './crawling/crawling.module';
import { SchedulerModule } from './scheduler/scheduler.module';
import { AuthModule } from './auth/auth.module'; // 인증 모듈
import { PrismaModule } from '../prisma/prisma.module';
import { AiSummaryModule } from './ai-summary/ai-summary.module'; // AI 요약 모듈
import { NewsletterModule } from './newsletter/newsletter.module'; // 뉴스레터 모듈
import { FeedbackModule } from './feedback/feedback.module'; // 피드백 모듈
import { RedisDatabaseModule } from './database/redis/redis.module'; // Redis 모듈
import { OpenAiService } from './ai-summary/openai.service';
import { MailModule } from './mail/mail.module';
import { MailService } from './mail/mail.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    MongooseModule.forRoot(process.env.MONGO_URL),
    CrawlingModule,
    SchedulerModule,
    AuthModule, // Google OAuth 설정이 포함된 인증 모듈
    AiSummaryModule, // AI 요약 모듈
    NewsletterModule, // 뉴스레터 모듈
    FeedbackModule, // 피드백 모듈
    RedisDatabaseModule, // Redis 모듈
    PrismaModule,
    MailModule,
  ],
  controllers: [AppController],
  providers: [AppService, OpenAiService, MailService],
})
export class AppModule {}
