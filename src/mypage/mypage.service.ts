import { Injectable, NotFoundException } from '@nestjs/common';
import { MysqlPrismaService } from 'prisma/mysql.service';

@Injectable()
export class MyPageService {
  constructor(private readonly prisma: MysqlPrismaService) {}

  /**
   * 사용자 프로필 조회
   * @param userId 사용자 ID
   */
  async getProfile(userId: number) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        email: true,
        username: true,
        profileImg: true,
        interests: true,
        timezone: true,
      },
    });

    if (!user) {
      throw new NotFoundException(`User with ID ${userId} not found.`);
    }

    return user;
  }

  /**
   * 북마크(좋아요) 조회
   * @param userId 사용자 ID
   */
  async getBookmarks(userId: number) {
    const bookmarks = await this.prisma.feedback.findMany({
      where: { userId, likes: true },
      include: {
        newsletter: {
          select: {
            id: true,
            title: true, // news-title 추가
            imageUrl: true, // news-img 추가
            content: true, // news-summary 추가 (100자 제한)
            createdAt: true, // news-createdAt 추가
            category: {
              // 카테고리 정보 추가
              select: {
                id: true,
                name: true, // 카테고리 이름 추가
              },
            },
          },
        },
      },
    });

    if (!bookmarks.length) {
      throw new NotFoundException('No bookmarks found for this user.');
    }

    return bookmarks.map((bookmark) => ({
      id: bookmark.newsletter?.id,
      newsTitle: bookmark.newsletter?.title,
      newsImg: bookmark.newsletter?.imageUrl || null,
      newsCreatedAt: bookmark.newsletter?.createdAt,
      newsSummary: bookmark.newsletter?.content
        ? bookmark.newsletter.content.substring(0, 100) + '...'
        : null,
      category: bookmark.newsletter?.category
        ? {
            id: bookmark.newsletter.category.id,
            name: bookmark.newsletter.category.name,
          }
        : null, // 카테고리 정보 포함
    }));
  }

  /**
   * 현재 구독 상태 확인
   * @param userId 사용자 ID
   */
  async getSubscriptionStatus(userId: number) {
    const subscription = await this.prisma.subscriber.findFirst({
      where: { userId, endAt: null }, // 활성 구독만 조회
    });

    return subscription ? { active: true } : { active: false };
  }

  /**
   * 전체 구독 기록 조회
   * @param userId 사용자 ID
   */
  async getSubscriptionHistory(userId: number) {
    const subscriptions = await this.prisma.subscriber.findMany({
      where: { userId },
      orderBy: { startedAt: 'desc' },
      select: {
        id: true,
        startedAt: true,
        endAt: true,
      },
    });

    if (subscriptions.length === 0) {
      throw new NotFoundException(
        `No subscriptions found for User ID ${userId}`,
      );
    }

    return subscriptions;
  }

  /**
   * 관심사 조회
   * @param userId 사용자 ID
   */
  async getInterests(userId: number) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      select: { interests: true },
    });

    if (!user) {
      throw new NotFoundException(`User with ID ${userId} does not exist.`);
    }

    return user.interests || [];
  }

  async addInterests(userId: number, categoryIds: number[]) {
    if (!Array.isArray(categoryIds) || categoryIds.length === 0) {
      throw new NotFoundException('No categories provided.');
    }

    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      select: { interests: true },
    });

    if (!user) {
      throw new NotFoundException(`User with ID ${userId} does not exist.`);
    }

    // 카테고리 ID가 유효한지 확인 (findMany 사용)
    const validCategories = await this.prisma.newsCategory.findMany({
      where: { id: { in: categoryIds } },
      select: { id: true },
    });

    const validCategoryIds = validCategories.map((cat) => cat.id);

    if (validCategoryIds.length === 0) {
      throw new NotFoundException('No valid categories found.');
    }

    // 현재 관심사 중복 제거
    const currentInterests = Array.isArray(user.interests)
      ? user.interests
      : [];
    const newInterests = [
      ...new Set([...currentInterests, ...validCategoryIds]),
    ];

    console.log('New interests:', newInterests);

    return this.prisma.user.update({
      where: { id: userId },
      data: { interests: newInterests },
      select: { interests: true },
    });
  }

  /**
   * 관심사 수정 (덮어쓰기)
   * @param userId 사용자 ID
   * @param categoryIds 새로운 관심사 목록
   */
  async updateInterests(userId: number, categoryIds: number[]) {
    if (!Array.isArray(categoryIds)) {
      throw new NotFoundException('Invalid category list.');
    }

    // 유저 조회
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      select: { interests: true },
    });

    if (!user) {
      throw new NotFoundException(`User with ID ${userId} does not exist.`);
    }

    // 유효한 카테고리인지 확인
    const validCategories = await this.prisma.newsCategory.findMany({
      where: { id: { in: categoryIds } },
      select: { id: true },
    });

    const validCategoryIds = validCategories.map((cat) => cat.id);

    if (validCategoryIds.length !== categoryIds.length) {
      throw new NotFoundException('Some categories are invalid.');
    }

    // 기존 관심사를 완전히 덮어쓰고 업데이트된 관심사 데이터만 반환
    return this.prisma.user.update({
      where: { id: userId },
      data: { interests: validCategoryIds },
      select: { interests: true },
    });
  }

  async removeInterests(userId: number, categoryId: number) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      select: { interests: true },
    });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    const category = await this.prisma.newsCategory.findUnique({
      where: { id: categoryId },
      select: { name: true },
    });
    if (!category) {
      throw new NotFoundException('Category not found');
    }
    const interestsList = Array.isArray(user.interests)
      ? user.interests.filter((id) => id !== categoryId)
      : [];

    return this.prisma.user.update({
      where: { id: userId },
      data: { interests: interestsList },
      select: { interests: true },
    });
  }
}
