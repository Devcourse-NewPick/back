import { Injectable } from '@nestjs/common';
import OpenAI from 'openai';
import { ConfigService } from '@nestjs/config';
@Injectable()
export class AiSummaryService {
  private readonly openai: OpenAI;

  constructor(private configService: ConfigService) {
    this.openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
  }

  async summarizeText(text: string): Promise<string> {
    const response = await this.openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: `Summarize this: ${text}` }],
      max_tokens: 100,
    });
    return response.choices[0].message?.content.trim() || '';
  }
}

// **테스트 모킹 추가:**
// 테스트 시 API 호출을 방지하기 위해 다음과 같은 방식으로 `MockOpenAI` 클래스를 생성하여 의존성 주입합니다.
