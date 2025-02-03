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
        message: `인기 순으로 ${popular ? '내림차순' : '오름차순'} 조회 성공`,
        data: await this.newsletterRepo.getNewsletter(offset, limit, popular),
      };
    }
    return {
      message: '정렬 없이 목록 조회 성공',
      data: await this.newsletterRepo.getNewsletter(0, 10),
    };
  }

  /**
   * 어제 작성된 뉴스레터를 카테고리별로 조회하는 엔드포인트
   * Query 파라미터로 categoryId가 전달되면 해당 카테고리만 조회하고,
   * 전달되지 않으면 모든 카테고리에 대해 어제의 뉴스레터(각 카테고리 1건)를 조회합니다.
   */
  @Get('trends')
  async getYesterdaysNewsletters(@Query('categoryId') categoryId?: number) {
    if (categoryId) {
      const newsletter =
        await this.newsletterRepo.getNewsletterFromYesterdayByCategory(
          Number(categoryId),
        );
      if (!newsletter) {
        throw new NotFoundException(
          '해당 카테고리의 전날 뉴스레터가 없습니다.',
        );
      }
      return {
        message: '해당 카테고리 전날 뉴스레터 조회 성공',
        data: newsletter,
      };
    } else {
      const newsletters =
        await this.newsletterRepo.getNewslettersFromYesterdayForAllCategories();
      if (!newsletters.length) {
        throw new NotFoundException('전날 뉴스레터가 없습니다.');
      }
      return {
        message: '모든 카테고리 전날 뉴스레터 조회 성공',
        data: newsletters,
      };
    }
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
