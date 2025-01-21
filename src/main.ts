import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // CORS 설정 추가
  app.enableCors({
    origin: 'http://localhost:3000', // Next.js 주소
    credentials: true, // HTTP 요청에서 쿠키 & 인증 헤더 허용
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // 허용할 HTTP 메서드
    allowedHeaders: ['Content-Type', 'Authorization'], // 허용할 요청 헤더
  });

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
