import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class MongoService {
  constructor(@InjectModel('News') private readonly newsModel: Model<any>) {}

  async saveNews(newsData: any): Promise<any> {
    const newNews = new this.newsModel(newsData);
    return newNews.save();
  }

  async findNewsByKeyword(keyword: string): Promise<any[]> {
    return this.newsModel.find({ content: { $regex: keyword, $options: 'i' } });
  }
}
