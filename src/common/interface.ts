import { HttpStatus } from '@nestjs/common';

export interface StatusMessage {
  statusCode: HttpStatus;
  message: string;
  data?: any;
}
