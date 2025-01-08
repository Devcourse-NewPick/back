import { Injectable, Inject } from '@nestjs/common';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';

@Injectable()
export class RedisService {
  constructor(@Inject(CACHE_MANAGER) private readonly cacheManager: Cache) {}

  async cacheNews(key: string, value: any): Promise<string> {
    await this.cacheManager.set(key, JSON.stringify(value), 3600); // 숫자 값으로 TTL 설정
    return 'News cached successfully';
  }

  async getCachedNews(key: string): Promise<any | null> {
    const result = await this.cacheManager.get(key);
    return result ? JSON.parse(result as string) : null;
  }
}
