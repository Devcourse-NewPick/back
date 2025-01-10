import { PrismaClient } from '../prisma/generated/mongodb';
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();

async function main() {
  try {
    // CrawledNews 생성
    const news = await prisma.crawledNews.create({
      data: {
        title: faker.lorem.sentence(),
        url: faker.internet.url(),
        summary: faker.lorem.sentence(),
        source: faker.company.name(),
        countryCode: faker.helpers.arrayElement(['KR', 'US', 'JP', 'CN']),
        publishedAt: faker.date.recent(),
        categoryName: [faker.helpers.arrayElement(['Technology', 'AI'])],
        img: faker.image.url(),
      },
    });

    console.log('Created news:', news);
    console.log('테스트 완료');

    // 생성된 뉴스 조회
    const foundNews = await prisma.crawledNews.findUnique({
      where: {
        url: news.url,
      },
    });

    console.log('Found news:', foundNews);
  } catch (error) {
    console.error('Error:', error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
