import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AiSummaryService } from './ai-summary/ai-summary.service';

describe('AppController', () => {
  let appController: AppController;
  let aiSummaryServiceMock: Partial<AiSummaryService>;

  beforeEach(async () => {
    aiSummaryServiceMock = {
      summarizeText: jest.fn().mockResolvedValue('Mock summary text'), // 모킹된 응답
    };

    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [
        {
          provide: AiSummaryService,
          useValue: aiSummaryServiceMock, // 모킹된 서비스를 제공
        },
      ],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  it('should return "Mock summary text"', async () => {
    const result = await appController.getHello(); // getHello() 호출
    expect(result).toBe('Mock summary text'); // 기대값 확인
  });
});
