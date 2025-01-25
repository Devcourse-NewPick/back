import { MysqlPrismaService } from '../prisma/mysql.service';

const prisma = new MysqlPrismaService();

async function generateCategory() {
  const categories = [
    'IT',
    '경제',
    '사회',
    '세계',
    '스포츠',
    '연예',
    '문화',
    '과학',
    '건강',
    '교육',
  ];

  for (const category of categories) {
    await prisma.newsCategory.upsert({
      where: { name: category },
      update: {},
      create: {
        name: category,
      },
    });
  }

  console.log(`${categories.length}개의 카테고리가 생성되었습니다.`);
}

generateCategory();
