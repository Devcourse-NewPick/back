import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CrawlingModule } from './crawling/crawling.module';
import { SchedulerModule } from './scheduler/scheduler.module'; // 스케줄러 모듈
import { AuthModule } from './auth/auth.module'; // 인증 모듈
import { PrismaModule } from '../prisma/prisma.module'; // Prisma 모듈
import { AiSummaryModule } from './ai-summary/ai-summary.module'; // AI 요약 모듈
import { FeedbackModule } from './feedback/feedback.module'; // 피드백 모듈
import { RedisDatabaseModule } from './database/redis/redis.module'; // Redis 모듈
import { MyPageModule } from './mypage/mypage.module'; // 마이페이지 모듈
import { AdminModule } from './admin/admin.module'; // 관리자 페이지 모듈
import { UserModule } from './user/user.module'; // 유저 모듈
import { MailModule } from './mail/mail.module'; // 메일 모듈
import { OpenAiService } from './ai-summary/openai.service'; // OpenAI 서비스
import { MailService } from './mail/mail.service'; // 메일 서비스
import { CategoryModule } from './category/category.module'; // 카테고리 모듈
import { SentryModule } from '@sentry/nestjs/setup';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { SentryGlobalFilter } from '@sentry/nestjs/setup';
import { ScheduleModule } from '@nestjs/schedule';
import { MemoryMonitorService } from './monitoring/memory.monitor';
import { BasicRepositoryModule } from './repository/module';
import { ConfigLoggerMiddleware } from './middleware/config-logger.middleware';
import { CoopMiddleware } from './middleware/coop.middleware';
// import { CommonResponseInterceptor } from './common/response.interceptor';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    SentryModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URL), // MongoDB 연결
    CrawlingModule, // 크롤링 모듈
    SchedulerModule, // 스케줄러 모듈
    AuthModule, // 인증 모듈
    AiSummaryModule, // AI 요약 모듈
    FeedbackModule, // 피드백 모듈
    RedisDatabaseModule, // Redis 모듈
    PrismaModule, // Prisma 모듈
    MyPageModule, // 마이페이지 모듈
    AdminModule, // 관리자 페이지 모듈
    UserModule, // 유저 모듈
    MailModule, // 메일 모듈
    CategoryModule, // 카테고리 모듈
    ScheduleModule.forRoot(),
    BasicRepositoryModule,
  ],
  controllers: [AppController], // 컨트롤러 등록
  providers: [
    AppService,
    OpenAiService,
    MailService,
    {
      provide: APP_FILTER,
      useClass: SentryGlobalFilter,
    },
    // 인터셉터 등록 (이부분은 나중에 추가해야함 response 형식 전부 변경됨)
    // {
    //   provide: APP_INTERCEPTOR,
    //   useClass: CommonResponseInterceptor,
    // },
    MemoryMonitorService,
  ], // 서비스 등록
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ConfigLoggerMiddleware, CoopMiddleware).forRoutes('*');
  }
}

// 추후 JWTGuard 등록 필요.
