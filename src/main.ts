import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  app.enableCors({
    // 허용할 도메인 (프론트엔드 서버 주소)
    origin: configService.get<string>('FRONTEND_URL'),
    // 허용할 요청 메서드
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    // 허용할 요청 헤더
    allowedHeaders: ['Content-Type', 'Authorization'], 
    // 쿠키 전송 허용
    credentials: true, 
  });
  await app.listen(process.env.PORT ?? 3000);
  console.log(`Server is running on port ${process.env.PORT ?? 3000}`);
}
bootstrap();
