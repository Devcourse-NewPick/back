import {
  Controller,
  UseInterceptors,
  Get,
  Query,
  Param,
  Delete,
} from '@nestjs/common';
import { AiProcessingLogRepo } from '../aiProcessingLog.repo';
import { CommonResponseInterceptor } from 'src/common/response.interceptor';

@Controller('ai-processing-logs')
@UseInterceptors(CommonResponseInterceptor)
export class AiProcessingLogController {
  constructor(private readonly aiProcessingLogRepo: AiProcessingLogRepo) {}

  @Get()
  async getAiProcessingLog(@Query() query: { offset: number; limit: number }) {
    const offset = Number(query.offset);
    const limit = Number(query.limit);
    return {
      message: '목록 조회 성공',
      data: await this.aiProcessingLogRepo.getAiProcessingLog(offset, limit),
    };
  }

  @Get(':id')
  async getAiProcessingLogById(@Param('id') id: number) {
    id = Number(id);
    return {
      message: '상세 조회 성공',
      data: await this.aiProcessingLogRepo.getAiProcessingLogById(id),
    };
  }

  @Delete(':id')
  async deleteAiProcessingLog(@Param('id') id: number) {
    id = Number(id);
    return {
      message: '삭제 성공',
      data: await this.aiProcessingLogRepo.deleteAiProcessingLog(id),
    };
  }
}
