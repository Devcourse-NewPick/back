import { Test, TestingModule } from '@nestjs/testing';
import { MongoService } from './mongo.service';
import { MongooseModule } from '@nestjs/mongoose';
import { NewsSchema } from './schemas/news.schema';
import { ConfigModule } from '@nestjs/config';

describe('MongoService', () => {
  let mongoService: MongoService;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot(),
        MongooseModule.forRoot(process.env.MONGODB_URL),
        MongooseModule.forFeature([{ name: 'News', schema: NewsSchema }]),
      ],
      providers: [MongoService],
    }).compile();

    mongoService = module.get<MongoService>(MongoService);
  });

  it('should save news and retrieve it by keyword', async () => {
    const newsToSave = {
      title: 'New AI Model Released',
      content: 'An amazing AI model has been released...',
      url: 'https://example.com/ai-news',
      publishedAt: new Date(),
    };

    await mongoService.saveNews(newsToSave);
    const foundNews = await mongoService.findNewsByKeyword('AI');
    expect(foundNews.length).toBeGreaterThan(0);
  });
});
