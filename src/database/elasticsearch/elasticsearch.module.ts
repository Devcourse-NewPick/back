import { Module } from '@nestjs/common';
import { ElasticsearchModule } from '@nestjs/elasticsearch';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }), // .env 파일에서 환경 변수 로드
    ElasticsearchModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        node: configService.get<string>('ELASTICSEARCH_NODES'), // 환경 변수에서 Elasticsearch URL 가져오기
        auth: {
          username: configService.get<string>('ELASTIC_USERNAME') || '', // Elasticsearch 계정 사용자명
          password: configService.get<string>('ELASTIC_PASSWORD') || '', // Elasticsearch 계정 비밀번호
        },
      }),
    }),
  ],
  exports: [ElasticsearchModule], // 다른 모듈에서 사용할 수 있도록 ElasticsearchModule을 내보냄
})
export class ElasticsearchDatabaseModule {}
