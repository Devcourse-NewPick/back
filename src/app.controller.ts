import { Controller, Get } from '@nestjs/common';
import { OpenAiService } from './ai-summary/openai.service';
import { MemoryMonitorService } from './monitoring/memory.monitor';
@Controller()
export class AppController {
  constructor(
    private readonly openAiService: OpenAiService,
    private readonly memoryMonitorService: MemoryMonitorService,
  ) {}

  @Get()
  async getHello(): Promise<string> {
    return 'Hello World';
  }
  @Get('/debug-sentry')
  getError() {
    throw new Error('My first Sentry error!');
  }
  @Get('/memory')
  async checkMemory() {
    const memoryInfo = await this.memoryMonitorService.checkMemoryUsage();
    return {
      message: '메모리 체크 완료',
      memoryInfo,
    };
  }
}
