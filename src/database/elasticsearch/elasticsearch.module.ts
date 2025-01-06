import { Module } from '@nestjs/common';
import { ElasticsearchModule as ESM } from '@nestjs/elasticsearch'; // 별칭 적용
import { ElasticsearchService } from './elasticsearch.service';

@Module({
  imports: [
    ESM.register({
      node: process.env.ELASTICSEARCH_URL,
    }),
  ],
  providers: [ElasticsearchService],
  exports: [ElasticsearchService],
})
export class ElasticsearchModule {}
