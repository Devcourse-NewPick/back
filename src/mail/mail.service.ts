import { Injectable, Inject } from '@nestjs/common';
import { MysqlPrismaService } from '../../prisma/mysql.service';
import { Logger } from '@nestjs/common';
import nodemailer from 'nodemailer';
import { NODEMAILER } from './constants';
import { JSDOM } from 'jsdom';
import { Newsletter, NewsCategory } from '@prisma/client';
import { formatNewsletterContent } from '../common/utils/html-formatter.util';
import { newsletterTemplate } from './htmlTemplate';
import { HTMLFormatterService } from 'src/ai-summary/parseHtml.service';
@Injectable()
export class MailService {
  private transporter: nodemailer.Transporter;

  constructor(
    private readonly logger: Logger,
    private readonly prisma: MysqlPrismaService,
    private readonly htmlFormatterService: HTMLFormatterService,
    @Inject(NODEMAILER) private readonly config: any,
  ) {
    this.logger.log('MailService 초기화 완료');
    this.transporter = nodemailer.createTransport(this.config);
  }

  async sendBasicMail(newsletterId: number, to: string, cc: string) {
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
      this.prisma.emailArchive.create({
        data: {
          newsletterId: newsletterId,
          sentAt: new Date(),
          email: to,
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

  async sendHtmlMail(to: string, cc: string, html: string, subject: string) {
    return await this.transporter.sendMail({
      from: 'newpick.offical@gmail.com',
      to: to,
      subject: subject,
      html: html,
      cc: cc,
    });
  }
  async sendBulkMailWithMultipleNewsletter(
    subscribers: { email: string; interests: NewsCategory[] }[],
    newsletterArray: Newsletter[],
    basicIntroductionAsHTML: string,
  ) {
    try {
      const results = await Promise.all(
        subscribers.map(async (subscriber) => {
          const filteredNewsletter = newsletterArray.filter((newsletter) =>
            subscriber.interests.some(
              (interest) => interest.id === newsletter.categoryId,
            ),
          );
          const newsletterWithTemplate = filteredNewsletter.map((newsletter) =>
            newsletterTemplate(newsletter),
          );

          try {
            await this.transporter.sendMail({
              from: 'newpick.offical@gmail.com',
              to: subscriber.email,
              cc: '',
              subject: filteredNewsletter[0].title,
              html: basicIntroductionAsHTML + newsletterWithTemplate.join(''),
            });

            await this.prisma.emailArchive.create({
              data: {
                newsletterId: newsletterArray[0].id,
                sentAt: new Date(),
                email: subscriber.email,
              },
            });

            return {
              email: subscriber.email,
              success: true,
            };
          } catch (error) {
            this.logger.error(
              `Failed to send email to ${subscriber.email}:`,
              error,
            );
            return {
              email: subscriber.email,
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

  async sendBulkMailSingleNewsletter(newsletterId: number, emails: string[]) {
    try {
      const newsletter = await this.prisma.newsletter.findUnique({
        where: { id: newsletterId },
      });
      if (!newsletter) {
        throw new Error('Newsletter not found');
      }
      const originalNewsLink: Array<string> = newsletter.usedNews.split(',');

      async function getMetaData(link: string) {
        const response = await fetch(link);
        const html = await response.text();
        const doc = new JSDOM(html);
        return doc.window.document;
      }
      const formattedContentAsHTML = formatNewsletterContent(
        newsletter.contentAsHTML,
      );

      // 링크 메타데이터를 가져오고 HTML로 변환
      const originalNewsLinkAsHTML = await Promise.all(
        originalNewsLink.map(async (link) => {
          try {
            const doc = await getMetaData(link);
            const title = doc.querySelector('title')?.textContent || link;
            const description =
              doc
                .querySelector('meta[property="og:description"]')
                ?.getAttribute('content') ||
              doc
                .querySelector('meta[name="description"]')
                ?.getAttribute('content') ||
              '';
            const image =
              doc
                .querySelector('meta[property="og:image"]')
                ?.getAttribute('content') || '';

            return `
               <a href="${link}" 
                target="_blank" 
                rel="noopener noreferrer" 
                role="link" 
                style="
                  display: flex !important; 
                  color: inherit !important;
                  text-decoration: none !important;
                  max-width: 600px !important;
                  margin: 0 auto !important;
                  border: 1px solid rgba(55, 53, 47, 0.16) !important;
                  border-radius: 4px !important;
                  transition: background 0.2s ease-in !important;
                  min-height: 124px !important;
                  flex-direction: row !important;
                  align-items: stretch !important;
                  text-align: left !important;
                  margin-bottom: 6px !important;
                "
              >
              <div style="
                width: 65% !important;
                padding: 12px 14px !important;
                overflow: hidden !important;
                flex-shrink: 0 !important;
                display: block !important;
              ">
                <div style="
                  font-size: 16px;
                  margin-bottom: 4px;
                  color: rgb(55, 53, 47);
                ">${title}</div>
                <div style="
                  font-size: 14px;
                  line-height: 1.4;
                  color: rgba(55, 53, 47, 0.65);
                  display: -webkit-box;
                  -webkit-line-clamp: 2;
                  -webkit-box-orient: vertical;
                  overflow: hidden;
                ">${description.length > 40 ? description.substring(0, 40) + '...' : description}</div>
                <div style="display: flex; align-items: center; margin-top: 6px;">
                    <img src="https://www.google.com/s2/favicons?domain=${new URL(link).hostname}" style="
                      width: 16px;
                      height: 16px;
                      margin-right: 6px;
                      border-radius: 50%;
                    ">
                  <div style="
                    font-size: 12px;
                    color: rgb(55, 53, 47);
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                  ">${link}</div>
                </div>
              </div>
              ${
                image
                  ? `
              <div style="
                width: 35% !important;
                position: relative !important;
                flex-shrink: 0 !important;
                display: block !important;
              ">
                <img src="${image}" 
                      alt="${title}"
                      style="
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                        border-radius: 2px;
                        position: absolute;
                        top: 0;
                        left: 0;
                        right: 0;
                        bottom: 0;
                      ">
              </div>
              `
                  : ''
              }
              </a>
              `;
          } catch (error) {
            this.logger.error(
              `메타데이터 가져오기 실패: ${link}`,
              error.message,
            );
            return `<a href="${link}" target="_blank" style="color: #1a73e8; text-decoration: none;">${link}</a>`;
          }
        }),
      );

      const results = await Promise.all(
        emails.map(async (email) => {
          try {
            await this.transporter.sendMail({
              from: 'newpick.offical@gmail.com',
              to: email,
              cc: '',
              subject: newsletter.title,
              html: formattedContentAsHTML + originalNewsLinkAsHTML.join(''),
            });

            await this.prisma.emailArchive.create({
              data: {
                newsletterId: newsletterId,
                sentAt: new Date(),
                email: email,
              },
            });

            return {
              email: email,
              success: true,
            };
          } catch (error) {
            this.logger.error(`Failed to send email to ${email}:`, error);
            return {
              email: email,
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
