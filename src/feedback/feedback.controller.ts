import {
  Controller,
  Post,
  Delete,
  Body,
  Req,
  UseGuards,
  UnauthorizedException,
} from '@nestjs/common';
import { FeedbackService } from './feedback.service';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';

@Controller('feedback')
@UseGuards(AuthGuard('jwt')) // JWT 인증 적용
export class FeedbackController {
  constructor(private readonly feedbackService: FeedbackService) {}

  @Post('bookmark')
  async addBookmark(
    @Req() req: Request, // JWT에서 userId 자동 추출
    @Body() body: { newsId: number; newsletterId?: number; rating?: number }, // userId 제외
  ) {
    const user = req.user as { id: number }; // 명확한 타입 지정
    const userId = this.extractUserId(user.id);
    const { newsId, newsletterId, rating } = body;
    return this.feedbackService.addBookmark(
      userId,
      newsId,
      newsletterId,
      rating,
    );
  }

  @Delete('bookmark')
  async removeBookmark(
    @Req() req: Request, // JWT에서 userId 자동 추출
    @Body() body: { newsId: number }, // userId 제외
  ) {
    const user = req.user as { id: number }; // 명확한 타입 지정
    const userId = this.extractUserId(user.id);
    const { newsId } = body;
    return this.feedbackService.removeBookmark(userId, newsId);
  }

  private extractUserId(userId: string | number | undefined): number {
    if (!userId) {
      throw new UnauthorizedException('User not authenticated');
    }
    return typeof userId === 'string' ? parseInt(userId, 10) : userId;
  }
}
