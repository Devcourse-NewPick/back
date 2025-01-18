import { Test, TestingModule } from '@nestjs/testing';
import { OpenAiService } from './openai.service';

describe('OpenAiService', () => {
  let service: OpenAiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: OpenAiService,
          useValue: {
            summarizeText: jest.fn().mockResolvedValue('Mock summary content'),
          },
        },
      ],
    }).compile();

    service = module.get<OpenAiService>(OpenAiService);
  });

  it('should return a mocked summary', async () => {
    const result = await service.summarizeText('Sample text', []);
    expect(result).toBe('Mock summary content');
  });
});
