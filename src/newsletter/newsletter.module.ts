import { Module } from '@nestjs/common';
import { NewsletterService } from './newsletter.service';

@Module({
  providers: [NewsletterService]
})
export class NewsletterModule {}
