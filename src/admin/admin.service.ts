import { Injectable } from '@nestjs/common';

@Injectable()
export class AdminService {
  async getAllUsers() {
    // DB에서 사용자 목록 조회
    return [
      { userId: 1, email: 'admin@example.com', role: 'admin' },
      { userId: 2, email: 'user@example.com', role: 'user' },
    ];
  }

  async deleteUser(userId: number) {
    // DB에서 사용자 삭제 로직
    return { message: `User with ID ${userId} deleted successfully` };
  }

  async getAllBookmarks() {
    // 좋아요(북마크) 데이터 조회
    return [
      {
        userId: 2,
        newsId: 1,
        title: 'Exciting News!',
        likedAt: new Date().toISOString(),
      },
    ];
  }
}
