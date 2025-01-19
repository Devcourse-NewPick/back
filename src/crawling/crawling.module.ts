import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UtilService } from './util.service';
import { CrawlerService } from './crawler.service';
import { CrawlingService } from './crawling.service';
import { CrawlingRepository } from './crawling.repository';
import { CrawlingController } from './crawling.controller';
import { CrawledNews, CrawledNewsSchema } from './schema/crawling.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: CrawledNews.name, schema: CrawledNewsSchema }]),
  ],
  providers: [
    UtilService,
    CrawlerService,
    CrawlingService,
    CrawlingRepository,
  ],
  exports: [
    CrawlingService,
    CrawlingRepository,
  ],
  controllers: [CrawlingController],
})
export class CrawlingModule {}