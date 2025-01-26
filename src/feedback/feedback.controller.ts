import { Controller, Post, Delete, Body } from '@nestjs/common';
import { FeedbackService } from './feedback.service';

@Controller('feedback')
export class FeedbackController {
  constructor(private readonly feedbackService: FeedbackService) {}

  @Post('bookmark')
  async addBookmark(@Body() body: { userId: number; newsId: number }) {
    const { userId, newsId } = body;
    return this.feedbackService.addBookmark(userId, newsId);
  }

  @Delete('bookmark')
  async removeBookmark(@Body() body: { userId: number; newsId: number }) {
    const { userId, newsId } = body;
    return this.feedbackService.removeBookmark(userId, newsId);
  }
}