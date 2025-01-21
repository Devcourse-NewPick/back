import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module'; // 인증 모듈
import { CrawlingModule } from './crawling/crawling.module';
import { AiSummaryModule } from './ai-summary/ai-summary.module'; // AI 요약 모듈
import { NewsletterModule } from './newsletter/newsletter.module'; // 뉴스레터 모듈
import { FeedbackModule } from './feedback/feedback.module'; // 피드백 모듈
import { RedisDatabaseModule } from './database/redis/redis.module'; // Redis 모듈
import { MyPageModule } from './mypage/mypage.module'; // 마이페이지 모듈
import { AdminModule } from './admin/admin.module'; // 관리자 페이지 모듈
import { PrismaModule } from '../prisma/prisma.module'; // Prisma 모듈
import { OpenAiService } from './ai-summary/openai.service'; // OpenAI 서비스
import { MongooseModule } from '@nestjs/mongoose';
import { CrawledNews } from './crawling/schema/crawling.schema';
import { CrawledNewsSchema } from './crawling/schema/crawling.schema';
import { SubscriberModule } from './subscriber/subscriber.module'; // 구독자 모듈
import { UserModule } from './user/user.module'; // 유저 모듈
import { MailModule } from './mail/mail.module'; // 메일 모듈
import { MailService } from './mail/mail.service'; // 메일 서비스

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    MongooseModule.forRoot(process.env.MONGO_URL),
    CrawlingModule,
    AuthModule, // Google OAuth 설정이 포함된 인증 모듈
    CrawlingModule, // 크롤링 모듈
    AiSummaryModule, // AI 요약 모듈
    NewsletterModule, // 뉴스레터 모듈
    FeedbackModule, // 피드백 모듈
    RedisDatabaseModule, // Redis 모듈
    PrismaModule, // Prisma 모듈
    MyPageModule, // 마이페이지 모듈 추가
    AdminModule, // 관리자 페이지 모듈 추가
    SubscriberModule, // 구독자 모듈
    UserModule, // 유저 모듈
    MailModule, // 메일 모듈
  ],
  controllers: [AppController],
  providers: [AppService, OpenAiService, MailService],
})
export class AppModule {}
