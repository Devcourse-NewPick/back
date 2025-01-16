import { Controller, Get } from '@nestjs/common';
import { OpenAiService } from './ai-summary/openai.service';

@Controller()
export class AppController {
  constructor(private readonly openAiService: OpenAiService) {}

  @Get()
  async getHello(): Promise<string> {
    return await this.openAiService.summarizeText('Sample text');
  }
}
