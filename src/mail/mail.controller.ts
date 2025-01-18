import { Controller, Post, Body } from '@nestjs/common';
import { MailService } from './mail.service';

@Controller('mail')
export class MailController {
  constructor(private readonly mailService: MailService) {}

  @Post('send')
  async sendMail(@Body() data: { dateStart: string; dateEnd: string }) {
    return await this.mailService.sendMail(data);
  }
}
