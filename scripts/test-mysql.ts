import { PrismaClient } from '../prisma/generated/mysql';

const prisma = new PrismaClient();

async function main() {
  try {
    // User 생성
    const user = await prisma.user.create({
      data: {
        email: 'test@example.com',
        password: 'test1234',
        username: 'TestUser',
        role: 'user',
      },
    });

    console.log('Created user:', user);

    // NewsCategory 생성
    const category = await prisma.newsCategory.create({
      data: {
        name: 'Technology',
        description: 'Technology related news',
      },
    });

    console.log('Created category:', category);

    // Newsletter 생성
    const newsletter = await prisma.newsletter.create({
      data: {
        title: 'Test Newsletter',
        content: 'This is a test newsletter content',
        userId: user.id,
        categoryId: category.id,
      },
    });

    console.log('Created newsletter:', newsletter);
    console.log('테스트 완료');
  } catch (error) {
    console.error('Error:', error);
  } finally {
    await prisma.$disconnect();
  }
}

main();