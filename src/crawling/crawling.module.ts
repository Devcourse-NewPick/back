import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CrawledNews, CrawledNewsSchema } from './schema/crwaled-news.schema';
import { CrawlingService } from './crawling.service';
import { CrawlingController } from './crawling.controller';
import { CrawlerService } from './crawler.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: CrawledNews.name, schema: CrawledNewsSchema }]),
  ],
  providers: [
    CrawlerService,
    CrawlingService,
  ],
  exports: [CrawlingService],
  controllers: [CrawlingController],
})
export class CrawlingModule {}
