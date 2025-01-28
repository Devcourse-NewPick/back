import { Injectable, Logger } from '@nestjs/common';
import { OpenAI } from 'openai';

@Injectable()
export class HTMLFormatterService {
  constructor(
    private readonly openai: OpenAI,
    private readonly logger: Logger,
  ) {}

  async formatHtml(string: string) {
    try {
      const htmlResponse = await this.openai.chat.completions.create({
        model: 'gpt-4o-mini',
        messages: [
          {
            role: 'system',
            content:
              'You are an expert html formatter. Format the following summarized article and return the content as a readable, visial html the language is Korean',
          },
          {
            role: 'user',
            content: `Format the following summarized article and return the content as a html wrapped in <div> tag \n\nArticle: \n\n${string}`,
          },
        ],
      });

      const html = htmlResponse.choices[0].message.content;
      this.logger.debug(`HTML 포맷 완료: ${html}`);

      return html;
    } catch (error) {
      this.logger.error(`HTML 포맷 실패: ${error.message}`);
      throw new Error('HTML 포맷 실패.' + error.message);
    }
  }
}
