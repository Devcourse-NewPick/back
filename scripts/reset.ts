import { MysqlPrismaService } from '../prisma/mysql.service';

const prisma = new MysqlPrismaService();

async function reset() {
  const newsCategory = await prisma.newsCategory.deleteMany();
  const subscriber = await prisma.subscriber.deleteMany();
  const user = await prisma.user.deleteMany();
  console.log(`${newsCategory.count}개의 카테고리가 삭제되었습니다.`);
  console.log(`${subscriber.count}명의 구독자가 삭제되었습니다.`);
  console.log(`${user.count}명의 사용자가 삭제되었습니다.`);
}

reset();
