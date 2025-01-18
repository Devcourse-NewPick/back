import { Injectable, Inject } from '@nestjs/common';
import { MysqlPrismaService } from '../../prisma/mysql.service';
import { Logger } from '@nestjs/common';
import nodemailer from 'nodemailer';
import { NODEMAILER } from './constants';
@Injectable()
export class MailService {
  private transporter: nodemailer.Transporter;

  constructor(
    private readonly logger: Logger,
    private readonly prisma: MysqlPrismaService,
    @Inject(NODEMAILER) private readonly config: any,
  ) {
    this.logger.log('MailService 초기화 완료');
    this.transporter = nodemailer.createTransport(this.config);
  }

  async sendMail(newsletterId: number, to: string, cc: string, userId: number) {
    console.log(this.config);
    try {
      const newsletter = await this.prisma.newsletter.findUnique({
        where: { id: newsletterId },
      });
      await this.transporter.sendMail({
        from: 'newpick.offical@gmail.com',
        to: to, //string or Array
        subject: newsletter.title,
        html: newsletter.content,
        cc: cc,
      });
      this.logger.log('메일이 전송되었습니다');
      this.prisma.newsletterArchive.create({
        data: {
          newsletterId: newsletterId,
          sentAt: new Date(),
          userId: null,
          archiveDate: new Date(),
        },
      });
      return {
        success: true,
        message: '메일이 전송되었습니다',
      };
    } catch (error) {
      this.logger.error('메일 전송 중 오류가 발생했습니다:', error);
      return {
        success: false,
        message: '메일 전송 중 오류가 발생했습니다',
      };
    }
  }
}
