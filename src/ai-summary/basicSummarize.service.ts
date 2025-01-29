import { Injectable, Logger } from '@nestjs/common';
import { OpenAI } from 'openai';

@Injectable()
export class BasicSummarizeService {
  constructor(
    private readonly openai: OpenAI,
    private readonly logger: Logger,
  ) {}

  async basicSummarize(
    text: string,
    minOutputText: number,
    maxOutputText: number,
  ): Promise<any> {
    const response = await this.openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        {
          role: 'system',
          content:
            'You are an expert summarizer. Summarize articles into Korean',
        },
        {
          role: 'user',
          content: `Summarize the following text into a concise paragraph of ${minOutputText}-${maxOutputText} words:\n\n${text}`,
        },
      ],
      temperature: 0.5,
    });
    return response;
  }
}
