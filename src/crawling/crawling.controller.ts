import { Controller, Get, Param, UseInterceptors } from '@nestjs/common';
import { CrawlingService } from './crawling.service';
import { CrawlingRepository } from './crawling.repository';
import { CommonResponseInterceptor } from '../common/response.interceptor';
import { CategoryRepository } from '../category/category.repository';
@Controller('crawling')
@UseInterceptors(CommonResponseInterceptor)
export class CrawlingController {
  constructor(
    private readonly crawlingService: CrawlingService,
    private readonly crawlingRepository: CrawlingRepository,
    private readonly categoryRepository: CategoryRepository,
  ) {}
  // 크롤링 테스트
  // @Get()
  // async crawling() {
  //   return await this.crawlingService.crawling();
  // }
  // 크롤링 데이터
  @Get()
  async crawlingDetail() {
    const news = await this.crawlingRepository.getLatestCrawledNews();
    const oldNews = await this.crawlingRepository.getOldestCrawledNews();
    const newsCountperCategory =
      await this.crawlingRepository.getNewsCountPerCategory();
    return {
      message: '크롤링 데이터 조회 성공',
      data: {
        news: news.createdAt,
        oldNews: oldNews.createdAt,
        newsCountperCategory,
      },
    };
  }

  @Get('category/:categoryId')
  async getCrawledNewsByCategory(@Param('categoryId') categoryId: number) {
    const categoryName = await this.categoryRepository.findById(categoryId);
    return {
      message: '카테고리별 크롤링 데이터 조회 성공',
      data: await this.crawlingRepository.getCrawledNewsByCategory(
        categoryName.name,
      ),
    };
  }
  // <<<<<<< HEAD
  //   async getCrawledNews() {
  //     return await this.crawlingRepository.getLatestCrawledNews();
  //   }

  //   @Get('crawling')
  //   async crawling() {
  //     return this.crawlingService.crawling();
  //   }

  //   @Get('crawling-detail')
}
