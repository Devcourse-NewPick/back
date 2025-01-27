import { Module } from '@nestjs/common';
import { NewsletterRepo } from './newsletter.repository';
import { BasicRepositoryController } from './controllers/newsletter.controller';
import { MysqlPrismaService } from '../../prisma/mysql.service';
import { AiProcessingLogRepo } from './aiProcessingLog.repo';
import { AiProcessingLogController } from './controllers/aiProcessingLog.controller';
import { EmailArchivesRepo } from './emailArchives.repository';
import { EmailArchivesController } from './controllers/emailArchieve.controller';

@Module({
  imports: [],
  providers: [
    NewsletterRepo,
    MysqlPrismaService,
    AiProcessingLogRepo,
    EmailArchivesRepo,
  ],
  controllers: [
    BasicRepositoryController,
    AiProcessingLogController,
    EmailArchivesController,
  ],
  exports: [],
})
export class BasicRepositoryModule {}
