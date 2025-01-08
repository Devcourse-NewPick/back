import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
// 불필요한 임포트 제거 및 사용 예시 제공
import { validateOrReject } from 'class-validator'; // 실제 필요한 경우 DTO 클래스에서 사용하도록 수정 필요 from 'class-validator';

@Injectable()
export class FeedbackService {
  async saveFeedback(content: string) {
    const feedback = {
      id: uuidv4(),
      content,
    };

    // 검증 로직
    await validateOrReject(feedback);
    return `Feedback saved with ID: ${feedback.id}`;
  }
}
