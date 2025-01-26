import { MysqlPrismaService } from '../prisma/mysql.service';
import { faker } from '@faker-js/faker';

const prisma = new MysqlPrismaService();

async function generateUser() {
  let count = 0;
  for (count = 0; count < 10; count++) {
    await prisma.user.create({
      data: {
        email: faker.internet.email(),
        password: 'test',
        username: faker.person.fullName(),
        role: 'user',
        createdAt: new Date(),
        updatedAt: new Date(),
        interests: [],
        timezone: 'Asia/Seoul',
        profileImg: faker.image.avatar(),
        frequency: 'daily',
        notificationPreferences: {
          email: true,
          web: true,
        },
      },
    });
  }
  console.log(`${count}명의 사용자가 생성되었습니다.`);
}

generateUser();
