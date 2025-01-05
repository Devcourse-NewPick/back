import { Test, TestingModule } from '@nestjs/testing';
import { NewsletterService } from './newsletter.service';
import { MailerService } from '@nestjs-modules/mailer';

describe('NewsletterService', () => {
  let service: NewsletterService;
  let mockMailerService: Partial<MailerService>;

  beforeEach(async () => {
    mockMailerService = {
      sendMail: jest.fn().mockResolvedValue(true),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        NewsletterService,
        { provide: MailerService, useValue: mockMailerService },
      ],
    }).compile();

    service = module.get<NewsletterService>(NewsletterService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should send email successfully', async () => {
    await service.sendNewsletter('test@example.com', 'Newsletter content');
    expect(mockMailerService.sendMail).toHaveBeenCalledWith({
      to: 'test@example.com',
      subject: 'Your AI-generated Newsletter',
      text: 'Newsletter content',
    });
  });
});
