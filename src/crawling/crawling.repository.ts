import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CrawledNews } from './schema/crawling.schema';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import { CategoryRepository } from 'src/category/category.repository';

dayjs.extend(utc);

@Injectable()
export class CrawlingRepository {
  constructor(
    @InjectModel(CrawledNews.name)
    private readonly crawledNews: Model<CrawledNews>,
    private readonly categoryRepository: CategoryRepository,
  ) {}

  private readonly logger = new Logger(CrawlingRepository.name);
  // 크롤링 데이터 저장
  async getAllNews(): Promise<CrawledNews[]> {
    return await this.crawledNews.find().exec();
  }

  async createCrawledNews(dataArray: CrawledNews[]): Promise<CrawledNews[]> {
    const news: CrawledNews[] = [];
    try {
      for (const data of dataArray) {
        await this.crawledNews.findOneAndUpdate(
          { link: data.link },
          { $setOnInsert: data },
          { upsert: true, new: false },
        );
        news.push(data);
      }
      return news;
    } catch (error) {
      this.logger.error(`Failed to create data: ${error.message}`);
      throw error;
    }
  }
  // 가장 최근 크롤링 데이터 조회
  async getLatestCrawledNews(): Promise<CrawledNews> {
    return await this.crawledNews.findOne().sort({ createdAt: -1 });
  }
  // 가장 오래된 데이터 조회회
  async getOldestCrawledNews(): Promise<CrawledNews> {
    return await this.crawledNews.findOne().sort({ createdAt: 1 });
  }
  // 크롤링 데이터 조회
  async getCrawledNews(
    dateStart: string,
    dateEnd: string,
    categoryId: number,
  ): Promise<{ news: CrawledNews[]; dateStart: string; dateEnd: string }> {
    const startDate = dayjs(dateStart).startOf('day').utc(true).toDate();
    const endDate = dayjs(dateEnd).endOf('day').utc(true).toDate();
    const categoryName = await this.categoryRepository.findById(categoryId);
    // 디버깅을 위한 로그 추가
    this.logger.debug('DB 검색 범위:', {
      startDate,
      endDate,
      categoryName,
    });
    try {
      const news = await this.crawledNews
        .find({
          createdAt: {
            $gte: startDate,
            $lte: endDate,
          },
          category: categoryName.name,
        })
        .sort({ createdAt: -1 })
        .lean()
        .exec();
      return {
        news,
        dateStart,
        dateEnd,
      };
    } catch (error) {
      this.logger.error(`Failed to fetch data: ${error.message}`);
      throw error;
    }
  }
  // 30일 이전 크롤링 데이터 삭제
  async deleteCrawledNews(): Promise<number> {
    const daysAgo = new Date();
    daysAgo.setDate(daysAgo.getDate() - 30);
    try {
      const result = await this.crawledNews.deleteMany({
        createdAt: { $lt: daysAgo },
      });
      return result.deletedCount || 0;
    } catch (error) {
      this.logger.error(`Failed to delete data: ${error.message}`);
      throw error;
    }
  }
  // 카테고리별 크롤링 데이터 조회
  async getCrawledNewsByCategory(category: string): Promise<CrawledNews[]> {
    return await this.crawledNews.find({ category: category }).exec();
  }
  // 카테고리별 크롤링 데이터 수 조회
  async getNewsCountPerCategory() {
    const news = await this.getAllNews();
    const categories = await this.categoryRepository.findAll();
    console.log(news.length, categories.length);

    const newsCountPerCategory = {};
    categories.map(async (category) => {
      newsCountPerCategory[category.id] = news.filter((item) =>
        item.category.includes(category.name),
      ).length;
    });
    return newsCountPerCategory;
  }
}
