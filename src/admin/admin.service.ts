import { Injectable, NotFoundException } from '@nestjs/common';
import { MysqlPrismaService } from 'prisma/mysql.service';

@Injectable()
export class AdminService {
  constructor(private readonly prisma: MysqlPrismaService) {}

  async getAllUsers() {
    return this.prisma.user.findMany();
  }

  async deleteUser(id: number) {
    const user = await this.prisma.user.findUnique({ where: { id } });
    if (!user) {
      throw new NotFoundException('User not found');
    }

    return this.prisma.user.delete({ where: { id } });
  }

  async getAllBookmarks() {
    return this.prisma.bookmark.findMany({
      include: {
        user: true, // 각 북마크와 관련된 사용자 정보 포함
      },
    });
  }

  /**
   * 사용자 정보 수정
   */
  async updateUser(id: number, updateDto: { role?: string; status?: string }) {
    const user = await this.prisma.user.findUnique({ where: { id } });
    if (!user) {
      throw new Error('User not found');
    }

    return this.prisma.user.update({
      where: { id },
      data: updateDto,
    });
  }
}
