import { MysqlPrismaService } from '../prisma/mysql.service';

const prisma = new MysqlPrismaService();

async function generateSubscriber() {
  const users = await prisma.user.findMany();
  for (const user of users.slice(0, 8)) {
    // 해당 사용자가 이미 구독자인지 확인
    const existingSubscriber = await prisma.subscriber.findUnique({
      where: {
        userId: user.id,
      },
    });

    // 구독자가 아닌 경우에만 생성
    if (!existingSubscriber) {
      await prisma.subscriber.create({
        data: {
          userId: user.id,
          startedAt: new Date(),
          endAt: null,
        },
      });
    }
  }
  console.log(`${users.length}명의 구독자가 생성되었습니다.`);
}

generateSubscriber();
