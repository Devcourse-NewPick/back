import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config'; // 환경 변수 모듈
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module'; // 인증 모듈
import { CrawlingModule } from './crawling/crawling.module'; // 크롤링 모듈
import { AiSummaryModule } from './ai-summary/ai-summary.module'; // AI 요약 모듈
import { NewsletterModule } from './newsletter/newsletter.module'; // 뉴스레터 모듈
import { FeedbackModule } from './feedback/feedback.module'; // 피드백 모듈
import { RedisDatabaseModule } from './database/redis/redis.module'; // Redis 모듈
import { PrismaModule } from '../prisma/prisma.module';
import { OpenAiService } from './ai-summary/openai.service';
import { MongooseModule } from '@nestjs/mongoose';
import { MailModule } from './mail/mail.module';
import { MailService } from './mail/mail.service';
import {
  CrawledNews,
  CrawledNewsSchema,
} from './crawling/schema/crwaled-news.schema';
@Module({
  imports: [
    // 환경 변수 모듈 설정
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env', // 환경 변수 파일을 명시적으로 설정
    }),
    MongooseModule.forRoot(process.env.MONGO_URL),
    MongooseModule.forFeature([
      {
        name: CrawledNews.name,
        schema: CrawledNewsSchema,
        collection: 'CrawledNews',
      },
    ]),
    // 사용자 모듈들
    AuthModule, // Google OAuth 설정이 포함된 인증 모듈
    CrawlingModule, // 크롤링 모듈
    AiSummaryModule, // AI 요약 모듈
    NewsletterModule, // 뉴스레터 모듈
    FeedbackModule, // 피드백 모듈
    RedisDatabaseModule, // Redis 모듈
    PrismaModule,
    MailModule,
  ],
  controllers: [AppController], // 컨트롤러 등록
  providers: [AppService, OpenAiService, MailService], // 서비스 등록
})
export class AppModule {}
