import { NestFactory } from '@nestjs/core';
import { AppModule } from '../src/app.module';
import { CrawlingService } from '../src/crawling/crawling.service';

async function testMongoDBCreation() {
  try {
    const app = await NestFactory.create(AppModule);
    const crawlingService = app.get(CrawlingService);

    const createdNews = await crawlingService.findAll();
    console.log('뉴스목록', createdNews);
    console.log(`테스트 완료 ${createdNews.length}개`);
  } catch (error) {
    console.error('에러 발생:', error);
  } finally {
    process.exit(0);
  }
}

testMongoDBCreation();
