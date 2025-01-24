import { Controller, Post, Body } from '@nestjs/common';
import { MailService } from './mail.service';

@Controller('mail')
export class MailController {
  constructor(private readonly mailService: MailService) {}

  @Post('send')
  async sendMail(
    @Body()
    data: {
      to: string;
      cc: string;
      newsletterId: number;
    },
  ) {
    const { to, cc, newsletterId } = data;
    return await this.mailService.sendMail(newsletterId, to, cc);
  }

  @Post('send-bulk')
  async sendBulkMail(
    @Body()
    data: {
      newsletterId: number;
      recipients: { to: string; cc?: string }[];
    },
  ) {
    const { newsletterId, recipients } = data;
    return await this.mailService.sendBulkMail(newsletterId, recipients);
  }
}
