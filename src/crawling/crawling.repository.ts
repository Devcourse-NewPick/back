import { Injectable, Logger } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CrawledNews } from "./schema/crawling.schema";

@Injectable()
export class CrawlingRepository {
  constructor(
    @InjectModel(CrawledNews.name) private readonly crawledNews: Model<CrawledNews>,
  ) {}

  private readonly logger = new Logger(CrawlingRepository.name);
  // 크롤링 데이터 저장
  async createData(dataArray: CrawledNews[]): Promise<CrawledNews[]> {
    const result: CrawledNews[] = [];
    try {
      this.logger.log(`Create ${dataArray.length} item to the database use by mongoose`);
      for (const data of dataArray) {
        await this.crawledNews.findOneAndUpdate(
          { link: data.link },
          { $setOnInsert: data },
          { upsert: true, new: false }
        );
        result.push(data);
      }
      return result;
    } catch (error) {
      this.logger.error(`Failed to create data: ${error.message}`);
      throw error;
    }
  }
}