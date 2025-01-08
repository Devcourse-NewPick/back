import { Controller, Get } from '@nestjs/common';
import { AiSummaryService } from './ai-summary/ai-summary.service';

@Controller()
export class AppController {
  constructor(private readonly aiSummaryService: AiSummaryService) {}

  @Get()
  async getHello(): Promise<string> {
    return await this.aiSummaryService.summarizeText('Sample text');
  }
}
