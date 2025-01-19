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
      userId: number;
    },
  ) {
    const { to, cc, newsletterId, userId } = data;
    return await this.mailService.sendMail(newsletterId, to, cc, userId);
  }
}
