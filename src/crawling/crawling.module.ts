import { forwardRef, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CrawlerService } from './crawler.service';
import { CrawlingService } from './crawling.service';
import { CrawlingRepository } from './crawling.repository';
import { CrawlingController } from './crawling.controller';
import { CrawledNews, CrawledNewsSchema } from './schema/crawling.schema';
import { AiSummaryModule } from 'src/ai-summary/ai-summary.module';
import { FindCategoryService } from 'src/ai-summary/findCategory.service';
import { CategoryModule } from 'src/category/category.module';
@Module({
  imports: [
    forwardRef(() => AiSummaryModule),
    MongooseModule.forFeature([
      { name: CrawledNews.name, schema: CrawledNewsSchema },
    ]),
    CategoryModule,
  ],
  providers: [
    CrawlerService,
    CrawlingService,
    CrawlingRepository,
    FindCategoryService,
    CategoryModule,
  ],
  exports: [CrawlingService, CrawlingRepository],
  controllers: [CrawlingController],
})
export class CrawlingModule {}
