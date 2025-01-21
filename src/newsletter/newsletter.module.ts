import { Module } from '@nestjs/common';
import { MailerModule } from '@nestjs-modules/mailer';
import { NewsletterService } from './newsletter.service';

@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        host: 'smtp.example.com', // SMTP 서버 주소
        port: 587,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASSWORD,
        },
      },
      defaults: {
        from: '"No Reply" <noreply@example.com>',
      },
    }),
  ],
  providers: [NewsletterService],
  exports: [NewsletterService],
})
export class NewsletterModule {}
