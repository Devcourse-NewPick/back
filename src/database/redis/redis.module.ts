import { Module } from '@nestjs/common';
import { CacheModule } from '@nestjs/cache-manager';
import { RedisService } from './redis.service';

@Module({
  imports: [
    CacheModule.register({
      store: 'ioredis',
      host: process.env.REDIS_HOST,
      port: parseInt(process.env.REDIS_PORT, 10),
      ttl: 3600, // 캐시 만료 시간 (초 단위, 숫자로 설정)
    }),
  ],
  providers: [RedisService],
  exports: [RedisService],
})
export class RedisDatabaseModule {}
