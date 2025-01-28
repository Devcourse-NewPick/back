import {
  Controller,
  UseInterceptors,
  Get,
  Query,
  Param,
  Delete,
} from '@nestjs/common';
import { CommonResponseInterceptor } from 'src/common/response.interceptor';
import { NewsletterRepo } from '../newsletter.repository';

@Controller('newsletters')
@UseInterceptors(CommonResponseInterceptor)
export class BasicRepositoryController {
  constructor(private readonly newsletterRepo: NewsletterRepo) {}

  @Get()
  async getNewsletters(@Query() query: { offset: number; limit: number }) {
    const offset = Number(query.offset);
    const limit = Number(query.limit);
    return {
      message: '목록 조회 성공',
      data: await this.newsletterRepo.getNewsletter(offset, limit),
    };
  }

  @Get(':id')
  async getNewsletterById(@Param('id') id: number) {
    id = Number(id);
    return {
      message: '상세 조회 성공',
      data: await this.newsletterRepo.getNewsletterById(id),
    };
  }

  @Get('category/:categoryId')
  async getNewsletterByCategoryId(@Param('categoryId') categoryId: number) {
    categoryId = Number(categoryId);
    return {
      message: '카테고리 조회 성공',
      data: await this.newsletterRepo.getNewsletterByCategoryId(categoryId),
    };
  }

  @Delete(':id')
  async deleteNewsletter(@Param('id') id: number) {
    id = Number(id);
    return {
      message: '삭제 성공',
      data: await this.newsletterRepo.deleteNewsletter(id),
    };
  }
}
