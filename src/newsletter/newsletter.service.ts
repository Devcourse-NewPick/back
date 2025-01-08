import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class NewsletterService {
  constructor(private readonly mailerService: MailerService) {}

  async sendNewsletter(email: string, content: string) {
    await this.mailerService.sendMail({
      to: email,
      subject: 'Your AI-generated Newsletter',
      text: content,
    });
  }
}
