import { Test, TestingModule } from '@nestjs/testing';
import { AiSummaryService } from './openai.service';

describe('AiSummaryService', () => {
  let service: AiSummaryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: AiSummaryService,
          useValue: {
            summarizeText: jest.fn().mockResolvedValue('Mock summary content'),
          },
        },
      ],
    }).compile();

    service = module.get<AiSummaryService>(AiSummaryService);
  });

  it('should return a mocked summary', async () => {
    const result = await service.summarizeText('Sample text');
    expect(result).toBe('Mock summary content');
  });
});
