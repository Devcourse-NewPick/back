// prisma.module.ts
import { Global, Module } from '@nestjs/common';
import { MysqlPrismaService } from './mysql.service';

@Global()
@Module({
  imports: [],
  providers: [MysqlPrismaService],
  exports: [MysqlPrismaService],
})
export class PrismaModule {}
