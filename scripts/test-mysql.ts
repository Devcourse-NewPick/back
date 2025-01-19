import { faker } from '@faker-js/faker';
import { MysqlPrismaService } from '../prisma/mysql.service';

const prisma = new MysqlPrismaService();

async function main() {
  try {
    // User 생성
    const user = await prisma.user.create({
      data: {
        email: faker.internet.email(),
        password: faker.internet.password(),
        username: faker.person.fullName(),
        role: 'user',
      },
    });

    console.log('Created user:', user);

    // NewsCategory 생성
    const category = await prisma.newsCategory.create({
      data: {
        name: faker.lorem.word(),
        description: faker.lorem.sentence(),
      },
    });

    console.log('Created category:', category);

    // Newsletter 생성
    const newsletter = await prisma.newsletter.create({
      data: {
        title: faker.lorem.sentence(),
        content: faker.lorem.paragraph(),
        userId: user.id,
        categoryId: category.id,
        createdAt: new Date(),
        usedNews: '',
        viewcount: 0,
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
