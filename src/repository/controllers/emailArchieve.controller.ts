import {
  Controller,
  UseInterceptors,
  Get,
  Query,
  Param,
  Delete,
} from '@nestjs/common';
import { CommonResponseInterceptor } from 'src/common/response.interceptor';
import { EmailArchivesRepo } from '../emailArchives.repository';

@Controller('email-archives')
@UseInterceptors(CommonResponseInterceptor)
export class EmailArchivesController {
  constructor(private readonly emailArchivesRepo: EmailArchivesRepo) {}

  @Get()
  async getEmailArchives(@Query() query: { offset: number; limit: number }) {
    const offset = Number(query.offset);
    const limit = Number(query.limit);
    return this.emailArchivesRepo.getEmailArchives(offset, limit);
  }

  @Get(':id')
  async getEmailArchivesById(@Param('id') id: number) {
    id = Number(id);
    return this.emailArchivesRepo.getEmailArchivesById(id);
  }

  @Delete(':id')
  async deleteEmailArchives(@Param('id') id: number) {
    id = Number(id);
    return this.emailArchivesRepo.deleteEmailArchives(id);
  }
}
