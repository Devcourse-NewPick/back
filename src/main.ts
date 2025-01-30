import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { AppModule } from './app.module';
import cookieParser from 'cookie-parser'; // 쿠키파서 추가(리프레시토큰용)
import './instruments';

async function bootstrap() {
  // Nest 앱 생성
  const app = await NestFactory.create(AppModule);

  // ConfigService 가져오기
  const configService: ConfigService = app.get(ConfigService);

  // 환경 변수 및 기본값 설정
  const frontendUrl: string = configService.get<string>('FRONTEND_URL');
  const port: number = configService.get<number>('PORT', 3001);

  // 쿠키 파서 미들웨어 적용
  app.use(cookieParser());

  // CORS 설정
  app.enableCors({
    origin: frontendUrl,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
  });

  // Preflight 요청 처리 (추가적으로 안전장치)
  app.use((req, res, next) => {
    if (req.method === 'OPTIONS') {
      res.header('Access-Control-Allow-Origin', frontendUrl);
      res.header(
        'Access-Control-Allow-Methods',
        'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      );
      res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
      res.header('Access-Control-Allow-Credentials', 'true');
      return res.sendStatus(204);
    }
    next();
  });

  // 서버 실행
  try {
    await app.listen(port, '0.0.0.0'); // 0.0.0.0으로 외부 네트워크 수신 허용
    console.log(`서버 작동 on http://0.0.0.0:${port}`);
  } catch (error) {
    console.error('Error starting server:', error);
  }
}
bootstrap();
