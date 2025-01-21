import { NestFactory } from '@nestjs/core';
import { faker } from '@faker-js/faker';
import { AppModule } from '../src/app.module';
import { CrawlingService } from '../src/crawling/crawling.service';

async function testMongoDBCreation() {
  try {
    const app = await NestFactory.create(AppModule);
    const crawlingService = app.get(CrawlingService);

    const testData = {
      title: faker.lorem.sentence(),
      url: faker.internet.url(),
      summary: faker.lorem.sentence(),
      source: faker.company.name(),
      countryCode: faker.helpers.arrayElement(['KR', 'US', 'JP', 'CN']),
      publishedAt: faker.date.recent(),
      categoryName: [faker.helpers.arrayElement(['Technology', 'AI'])],
      img: faker.image.url(),
    };

    const createdNews = await crawlingService.create(testData);
    console.log('생성된 뉴스:', createdNews);
    console.log('테스트 완료');
  } catch (error) {
    console.error('에러 발생:', error);
  } finally {
    process.exit(0);
  }
}

testMongoDBCreation();
