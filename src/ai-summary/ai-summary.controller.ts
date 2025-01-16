import { Controller, Post, Body, Get } from '@nestjs/common';
import { OpenAiService } from './openai.service';

@Controller('ai-summary')
export class AiSummaryController {
  constructor(private readonly openAiService: OpenAiService) {}

  @Post('summarize')
  async summarize(@Body() data: { text: string }) {
    return this.openAiService.summarizeText(data.text);
  }

  @Get('test')
  async test() {
    return 'test';
  }
}
