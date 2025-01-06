import { Injectable } from '@nestjs/common';
import { ElasticsearchService as ESService } from '@nestjs/elasticsearch';

@Injectable()
export class ElasticsearchService {
  constructor(private readonly esService: ESService) {}

  async searchNewsByKeyword(keyword: string): Promise<any> {
    const result = await this.esService.search({
      index: 'news',
      query: {
        match: {
          content: keyword,
        },
      },
    });
    return result.hits.hits.map((hit: any) => hit._source);
  }
}
