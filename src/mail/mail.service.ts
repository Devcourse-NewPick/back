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

  async sendMail(newsletterId: number, to: string, cc: string) {
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

  async sendBulkMail(
    newsletterId: number,
    recipients: { to: string; cc?: string }[],
  ) {
    try {
      const newsletter = await this.prisma.newsletter.findUnique({
        where: { id: newsletterId },
      });

      if (!newsletter) {
        throw new Error('Newsletter not found');
        return {
          success: 0,
          failed: 0,
          message: 'Newsletter not found',
        };
      }

      const results = await Promise.all(
        recipients.map(async (recipient) => {
          try {
            await this.transporter.sendMail({
              from: 'newpick.offical@gmail.com',
              to: recipient.to,
              cc: recipient.cc,
              subject: newsletter.title,
              html: newsletter.content,
            });

            await this.prisma.newsletterArchive.create({
              data: {
                newsletterId: newsletterId,
                sentAt: new Date(),
                archiveDate: new Date(),
              },
            });

            return {
              email: recipient.to,
              success: true,
            };
          } catch (error) {
            this.logger.error(
              `Failed to send email to ${recipient.to}:`,
              error,
            );
            return {
              email: recipient.to,
              success: false,
              error: error.message,
            };
          }
        }),
      );

      const successCount = results.filter((r) => r.success).length;
      const failureCount = results.filter((r) => !r.success).length;

      this.logger.log(
        `벌크 메일 전송 완료: 성공 ${successCount}, 실패 ${failureCount}`,
      );

      return {
        success: successCount,
        failed: failureCount,
        message: `${successCount}개의 메일이 전송되었습니다. ${failureCount}개 실패`,
        details: results,
      };
    } catch (error) {
      this.logger.error('벌크 메일 전송 중 오류가 발생했습니다:', error);
      return {
        success: false,
        message: '벌크 메일 전송 중 오류가 발생했습니다',
        error: error.message,
      };
    }
  }
}
