import { Injectable, NotFoundException } from '@nestjs/common';
import { MysqlPrismaService } from 'prisma/mysql.service';

@Injectable()
export class UserService {
  constructor(private readonly prisma: MysqlPrismaService) {}

  // 사용자 등록
  async registerUser(email: string, password: string, username: string) {
    const existingUser = await this.prisma.user.findUnique({
      where: { email },
    });
    if (existingUser) {
      throw new Error('User with this email already exists.');
    }

    return this.prisma.user.create({
      data: {
        email,
        password, // TODO: 비밀번호 해싱 추가 필요
        username,
      },
    });
  }

  // 사용자 조회
  async getUserById(id: number) {
    const user = await this.prisma.user.findUnique({ where: { id } });
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found.`);
    }
    return user;
  }

  // 전체 사용자 조회
  async getAllUsers() {
    return this.prisma.user.findMany();
  }
}
