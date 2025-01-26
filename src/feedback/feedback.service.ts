import {
  Injectable,
  ConflictException,
  NotFoundException,
} from '@nestjs/common';
import { MysqlPrismaService } from 'prisma/mysql.service';

@Injectable()
export class FeedbackService {
  constructor(private readonly prisma: MysqlPrismaService) {}

  async addBookmark(
    userId: number,
    newsId: number,
    newsletterId?: number,
    rating?: number,
  ) {
    // 중복 체크
    const existingBookmark = await this.prisma.feedback.findFirst({
      where: { userId, newsId, likes: true },
    });

    if (existingBookmark) {
      throw new ConflictException('This item is already bookmarked.');
    }

    // newsletterId가 없는 경우 자동 연결
    if (!newsletterId) {
      const relatedNewsletter = await this.prisma.newsletter.findFirst({
        where: { usedNews: { contains: newsId.toString() } },
      });

      if (!relatedNewsletter) {
        throw new NotFoundException(
          'Related newsletter not found for the given newsId.',
        );
      }
      newsletterId = relatedNewsletter.id;
    }

    // 북마크 등록
    return this.prisma.feedback.create({
      data: {
        user: { connect: { id: userId } },
        newsId: newsId,
        likes: true,
        createdAt: new Date(),
        newsletter: { connect: { id: newsletterId } },
        rating: rating ?? 0, // 기본값 추가
      },
    });
  }

  async removeBookmark(userId: number, newsId: number) {
    // 북마크 존재 여부 확인
    const existingBookmark = await this.prisma.feedback.findFirst({
      where: { userId, newsId, likes: true },
    });

    if (!existingBookmark) {
      throw new NotFoundException('Bookmark not found.');
    }

    // 북마크 삭제
    return this.prisma.feedback.delete({
      where: { id: existingBookmark.id },
    });
  }
}
