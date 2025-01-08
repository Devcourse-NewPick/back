import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { News } from './schemas/news.schema'; // News 인터페이스를 import

@Injectable()
export class MongoService {
  constructor(@InjectModel('News') private readonly newsModel: Model<News>) {}

  // 뉴스 저장 메서드
  async saveNews(newsData: Partial<News>): Promise<News> {
    const newNews = new this.newsModel(newsData); // 새 뉴스 데이터 생성
    return newNews.save(); // MongoDB에 저장
  }

  // 키워드로 뉴스 검색 메서드
  async findNewsByKeyword(keyword: string): Promise<News[]> {
    return this.newsModel.find({ content: { $regex: keyword, $options: 'i' } }); // 키워드 기반 검색
  }

  // 뉴스 목록 전체 가져오기
  async getAllNews(): Promise<News[]> {
    return this.newsModel.find().exec(); // 모든 뉴스 가져오기
  }

  // 특정 URL로 뉴스 가져오기
  async getNewsByUrl(url: string): Promise<News | null> {
    return this.newsModel.findOne({ url }).exec(); // URL에 해당하는 뉴스 가져오기
  }

  // 뉴스 삭제
  async deleteNewsById(id: string): Promise<any> {
    return this.newsModel.findByIdAndDelete(id).exec(); // ID로 뉴스 삭제
  }
}
