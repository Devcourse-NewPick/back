import { Controller, Get } from '@nestjs/common';
import { MemoryMonitorService } from './monitoring/memory.monitor';
import * as Sentry from '@sentry/node';

@Controller()
export class AppController {
  constructor(private readonly memoryMonitorService: MemoryMonitorService) {}

  @Get()
  async getHello(): Promise<string> {
    return 'Hello World';
  }
  @Get('/memory')
  async checkMemory() {
    try {
      throw new Error('메모리 체크 에러');
    } catch (error) {
      Sentry.captureException(error);
      throw error;
    }
  }
  @Get('/debug-sentry')
  getError() {
    throw new Error('My first Sentry error!');
  }
}
