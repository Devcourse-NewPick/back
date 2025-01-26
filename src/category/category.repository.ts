import { Injectable, NotFoundException } from '@nestjs/common';
import { MysqlPrismaService } from '../../prisma/mysql.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class CategoryRepository {
  constructor(private readonly mysqlService: MysqlPrismaService) {}

  async findAll() {
    return this.mysqlService.newsCategory.findMany();
  }

  async findById(id: number) {
    id = Number(id);
    return this.mysqlService.newsCategory.findUnique({
      where: { id },
    });
  }

  async findByName(name: string) {
    return this.mysqlService.newsCategory.findFirst({
      where: { name: { equals: name } },
    });
  }

  async create(data: Prisma.NewsCategoryCreateInput) {
    return this.mysqlService.newsCategory.create({
      data,
    });
  }

  async update(id: number, data: Prisma.NewsCategoryUpdateInput) {
    id = Number(id);
    return this.mysqlService.newsCategory.update({
      where: { id },
      data,
    });
  }

  async delete(id: number) {
    id = Number(id);
    const deletedCategory = await this.mysqlService.newsCategory.delete({
      where: { id },
    });
    if (!deletedCategory) {
      throw new NotFoundException('카테고리를 찾을 수 없습니다.');
    }
    return deletedCategory;
  }
}
