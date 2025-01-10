import { PrismaClient } from '../prisma/generated/mongodb';

const prisma = new PrismaClient();

async function main() {
  try {
    // CrawledNews 생성
    const news = await prisma.crawledNews.create({
      data: {
        title: 'Test News Title',
        url: 'https://example.com/test-news',
        summary: 'This is a test news article summary',
        source: 'Test News Source',
        countryCode: 'KR',
        publishedAt: new Date(),
        categoryName: ['Technology', 'AI'],
        img: 'https://example.com/test-image.jpg',
      },
    });

    console.log('Created news:', news);
    console.log('테스트 완료');

    // 생성된 뉴스 조회
    const foundNews = await prisma.crawledNews.findUnique({
      where: {
        url: 'https://example.com/test-news',
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
