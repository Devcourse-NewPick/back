import { Injectable, Logger } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import dayjs from "dayjs";
import { CrawledNews } from "./schema/crawling.schema";

@Injectable()
export class CrawlingRepository {
  constructor(
    @InjectModel(CrawledNews.name) private readonly crawledNews: Model<CrawledNews>,
  ) {}

  private readonly logger = new Logger(CrawlingRepository.name);

  async createCrawledNews(dataArray: CrawledNews[]): Promise<CrawledNews[]> {
    const news: CrawledNews[] = [];
    try {
      for (const data of dataArray) {
        await this.crawledNews.findOneAndUpdate(
          { link: data.link },
          { $setOnInsert: data },
          { upsert: true, new: false }
        );
        news.push(data);
      }
      return news;
    } catch (error) {
      this.logger.error(`Failed to create data: ${error.message}`);
      throw error;
    }
  }

  async getCrawledNews(dateStart: string, dateEnd: string): Promise<CrawledNews[]> {
    const startDate = dayjs(dateStart).format('YYYY-MM-DD');
    const endDate = dayjs(dateEnd).format('YYYY-MM-DD');
    try {
      const news = await this.crawledNews.find({
        createdAt: {
          $gte: startDate,
          $lte: endDate
        },
      }).lean().exec();
      return news;
    } catch (error) {
      this.logger.error(`Failed to fetch data: ${error.message}`);
      throw error;
    }
  }

  async deleteCrawledNews(dateStart: string, dateEnd: string): Promise<CrawledNews[]> {
    return
  }
}