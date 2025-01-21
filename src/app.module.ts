import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config'; // 환경 변수 모듈
import { MongooseModule } from '@nestjs/mongoose';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module'; // 인증 모듈
import { PrismaModule } from '../prisma/prisma.module';
import { CrawlingModule } from './crawling/crawling.module'; // 크롤링 모듈
import { AiSummaryModule } from './ai-summary/ai-summary.module'; // AI 요약 모듈
import { NewsletterModule } from './newsletter/newsletter.module'; // 뉴스레터 모듈
import { FeedbackModule } from './feedback/feedback.module'; // 피드백 모듈
import { RedisDatabaseModule } from './database/redis/redis.module'; // Redis 모듈
import { OpenAiService } from './ai-summary/openai.service';
import { MailModule } from './mail/mail.module';
import { MailService } from './mail/mail.service';
import { SchedulerModule } from './scheduler/scheduler.module';

@Module({
  imports: [
    // 환경 변수 모듈 설정
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env', // 환경 변수 파일을 명시적으로 설정
    }),
    MongooseModule.forRoot(process.env.MONGO_URL),
    CrawlingModule,
    SchedulerModule,
    // 사용자 모듈들
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
