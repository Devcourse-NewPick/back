import {
  Controller,
  UseInterceptors,
  Get,
  Query,
  Param,
  Delete,
  BadRequestException,
  NotFoundException,
  ParseIntPipe,
  ValidationPipe,
  Post,
} from '@nestjs/common';
import { CommonResponseInterceptor } from 'src/common/response.interceptor';
import { NewsletterRepo } from '../newsletter.repository';
import {
  NewsletterQueryDto,
  NewsletterTrendDto,
  NewsletterCategoryDto,
  NewsletterRandomDto,
} from './newsletter.dto';
import dayjs from 'dayjs';

@Controller('newsletters')
@UseInterceptors(CommonResponseInterceptor)
export class BasicRepositoryController {
  constructor(private readonly newsletterRepo: NewsletterRepo) {}

  @Get('')
  async getNewsletters(@Query() query: NewsletterQueryDto) {
    const offset = Number(query.offset);
    const limit = Number(query.limit);
    const trend = query.trend;
    console.log('trend', trend);

    let startDate = null;
    let endDate = null;

    if (query.startDate && dayjs(query.startDate).isValid()) {
      startDate = dayjs(query.startDate).toDate();
    }

    if (query.endDate && dayjs(query.endDate).isValid()) {
      endDate = dayjs(query.endDate).toDate();
    }
    if (trend === undefined) {
      return {
        message: '정렬 없이 목록 조회 성공',
        data: await this.newsletterRepo.getNewsletterList(
          offset,
          limit,
          startDate,
          endDate,
        ),
      };
    }

    if (trend) {
      return {
        message: `인기 순으로 내림차순 조회 성공`,
        data: await this.newsletterRepo.getNewsletterList(
          offset,
          limit,
          startDate,
          endDate,
          trend,
        ),
      };
    } else {
      return {
        message: '오름차순 정렬 목록 조회 성공',
        data: await this.newsletterRepo.getNewsletterList(
          offset,
          limit,
          startDate,
          endDate,
        ),
      };
    }
  }

  /**
   * 어제 작성된 뉴스레터를 카테고리별로 조회하는 엔드포인트
   * Query 파라미터로 categoryId가 전달되면 해당 카테고리만 조회하고,
   * 전달되지 않으면 모든 카테고리에 대해 어제의 뉴스레터(각 카테고리 1건)를 조회합니다.
   */
  @Get('trends')
  async getYesterdaysNewsletters(@Query() query: NewsletterTrendDto) {
    if (query.categoryId) {
      const newsletter =
        await this.newsletterRepo.getNewsletterFromYesterdayByCategory(
          Number(query.categoryId),
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
  async getNewsletterById(
    @Param(
      'id',
      new ParseIntPipe({
        errorHttpStatusCode: 400,
      }),
    )
    id: number,
  ) {
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
  async getNewsletterByCategoryId(
    @Param(
      'categoryId',
      new ParseIntPipe({
        errorHttpStatusCode: 400,
      }),
    )
    categoryId: number,
    @Query(new ValidationPipe({ transform: true, whitelist: true }))
    query: NewsletterCategoryDto,
  ) {
    if (!categoryId) {
      throw new BadRequestException('Category ID is required');
    }
    const offset = Number(query.offset);
    const limit = Number(query.limit);
    const data = await this.newsletterRepo.getNewsletterByCategoryId(
      categoryId,
      offset,
      limit,
    );
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

  @Get('random/:num/:from')
  async getRandomNewsletter(@Param() params: NewsletterRandomDto) {
    const num = params.num || 1;
    const from = params.from || 7;

    const dateStart = dayjs().subtract(from, 'day').startOf('day').toDate();
    const dateEnd = dayjs().endOf('day').toDate();
    console.log('sdfsdfsdf', num, from);

    const newsletters = await this.newsletterRepo.getRandomNewsletters(
      dateStart,
      dateEnd,
      num,
    );

    if (!newsletters.length) {
      throw new NotFoundException('해당 기간에 뉴스레터가 없습니다');
    }

    return {
      message: '랜덤 조회 성공',
      data: newsletters,
    };
  }

  @Post('viewcount/:id')
  async addViewcount(@Param('id') id: number) {
    id = Number(id);
    if (!id) {
      throw new BadRequestException('Newsletter ID is required');
    }
    const data = await this.newsletterRepo.addViewcount(id);
    if (!data) {
      throw new NotFoundException('Newsletter not found');
    }
    return {
      message: '조회수 증가 성공',
      data: data.viewcount,
    };
  }

  @Post('reset-viewcount/:id')
  async resetViewcount(@Param('id') id: number) {
    id = Number(id);
    if (!id) {
      throw new BadRequestException('Newsletter ID is required');
    }
    const data = await this.newsletterRepo.resetViewcount(id);
    if (!data) {
      throw new NotFoundException('Newsletter not found');
    }
    return {
      message: '조회수 초기화 성공',
      data: data.viewcount,
    };
  }
}
