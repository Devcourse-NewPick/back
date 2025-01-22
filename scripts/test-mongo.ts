import { NestFactory } from '@nestjs/core';
import { AppModule } from '../src/app.module';
import { CrawlingRepository } from '../src/crawling/crawling.repository';

async function testMongoDB() {
  try {
    const app = await NestFactory.create(AppModule);
    const crawlingRepository = app.get(CrawlingRepository);
    const news = await crawlingRepository.getLatestCrawledNews();
    console.log(`테스트 완료:`, news);
  } catch (error) {
    console.error('에러 발생:', error);
  } finally {
    process.exit(0);
  }
}

testMongoDB();
