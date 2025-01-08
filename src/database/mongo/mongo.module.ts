import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MongoService } from './mongo.service';
import { NewsSchema } from './schemas/news.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'News', schema: NewsSchema }]), // News 모델 등록
  ],
  providers: [MongoService],
  exports: [MongoService],
})
export class MongoModule {}
