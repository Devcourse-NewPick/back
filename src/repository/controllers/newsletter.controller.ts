import {
  Controller,
  UseInterceptors,
  Get,
  Query,
  Param,
  Delete,
  BadRequestException,
} from '@nestjs/common';
import { CommonResponseInterceptor } from 'src/common/response.interceptor';
import { NewsletterRepo } from '../newsletter.repository';
import { NotFoundException } from '@nestjs/common';
@Controller('newsletters')
@UseInterceptors(CommonResponseInterceptor)
export class BasicRepositoryController {
  constructor(private readonly newsletterRepo: NewsletterRepo) {}

  @Get()
  async getNewsletters(
    @Query() query: { offset: number; limit: number; popular: boolean },
  ) {
    if (query.popular || query.offset || query.limit) {
      const offset = Number(query.offset);
      const limit = Number(query.limit);
      const popular = Boolean(query.popular);
      return {
        message: `인기 순으로 ${popular ? '내림조순' : '오름차순'} 조회 성공`,
        data: await this.newsletterRepo.getNewsletter(offset, limit, popular),
      };
    }
    return {
      message: '정렬 없이 목록 조회 성공',
      data: await this.newsletterRepo.getNewsletter(0, 10),
    };
  }

  @Get(':id')
  async getNewsletterById(@Param('id') id: number) {
    id = Number(id);
    if (!id) {
      throw new BadRequestException('Newsletter ID is required');
    }
    const newsletter = await this.newsletterRepo.getNewsletterById(id);
    if (!newsletter) {
      throw new NotFoundException('Newsletter not found');
    }
    return {
      message: '상세 조회 성공',
      data: {
        newsletter: newsletter,
        previousNewsletter:
          (await this.newsletterRepo.getPreviousNewsletter(
            newsletter.id,
            newsletter.createdAt,
          )) || null,
        nextNewsletter:
          (await this.newsletterRepo.getNextNewsletter(
            newsletter.id,
            newsletter.createdAt,
          )) || null,
      },
    };
  }

  @Get('category/:categoryId')
  async getNewsletterByCategoryId(@Param('categoryId') categoryId: number) {
    categoryId = Number(categoryId);
    if (!categoryId) {
      throw new BadRequestException('Category ID is required');
    }
    const data =
      await this.newsletterRepo.getNewsletterByCategoryId(categoryId);
    if (!data) {
      throw new NotFoundException('Newsletter not found');
    }
    return {
      message: '카테고리 조회 성공',
      data: data,
    };
  }

  @Delete(':id')
  async deleteNewsletter(@Param('id') id: number) {
    id = Number(id);
    if (!id) {
      throw new BadRequestException('Newsletter ID is required');
    }
    const data = await this.newsletterRepo.deleteNewsletter(id);
    if (!data) {
      throw new NotFoundException('Newsletter not found');
    }
    return {
      message: '삭제 성공',
      data: data,
    };
  }
}
