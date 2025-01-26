import { HttpStatus } from '@nestjs/common';
import { StatusMessage } from './interface';

export const getStatusMessage = (statusCode: HttpStatus): StatusMessage => {
  return {
    statusCode,
    message: HttpStatus[statusCode],
  };
};

export const getStatusMessageWithData = (
  statusCode: HttpStatus,
  data: any,
): StatusMessage => {
  return {
    statusCode,
    message: HttpStatus[statusCode],
    data,
  };
};
