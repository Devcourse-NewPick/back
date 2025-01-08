import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';
import { AiSummaryService } from '../src/ai-summary/ai-summary.service';
import { NewsletterService } from '../src/newsletter/newsletter.service';

describe('AppController (e2e)', () => {
  let app: INestApplication;
  let aiSummaryServiceMock: Partial<AiSummaryService>;
  let newsletterServiceMock: Partial<NewsletterService>;

  beforeAll(async () => {
    aiSummaryServiceMock = {
      summarizeText: jest.fn().mockResolvedValue('Mock summary text'),
    };

    newsletterServiceMock = {
      sendNewsletter: jest.fn().mockResolvedValue(true),
    };

    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    })
      .overrideProvider(AiSummaryService)
      .useValue(aiSummaryServiceMock)
      .overrideProvider(NewsletterService)
      .useValue(newsletterServiceMock)
      .compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Mock summary text');
  });

  afterAll(async () => {
    if (app) {
      await app.close();
    }
  });
});
