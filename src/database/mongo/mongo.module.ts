import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MongoService } from './mongo.service';

@Module({
  imports: [MongooseModule.forRoot(process.env.MONGODB_URL)],
  providers: [MongoService],
  exports: [MongoService],
})
export class MongoModule {}
