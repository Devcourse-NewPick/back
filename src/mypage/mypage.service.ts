import { Injectable } from '@nestjs/common';
import { MysqlPrismaService } from 'prisma/mysql.service';

@Injectable()
export class MyPageService {
  constructor(private readonly prisma: MysqlPrismaService) {}

  async getProfile(userId: number) {
    // DB에서 사용자 정보 조회
    return this.prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        email: true,
        username: true,
        profileImg: true,
      },
    });
  }

  async getBookmarks(userId: number) {
    // DB에서 좋아요(북마크)한 뉴스 목록 조회
    return this.prisma.feedback.findMany({
      where: { userId, likes: true },
      select: {
        newsId: true,
        comments: true,
        createdAt: true,
      },
    });
  }
}
