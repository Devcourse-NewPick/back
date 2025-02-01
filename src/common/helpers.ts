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

export function setTimeofCycle(hour: number, day: number): string {
  // cron 형식: 분 시 일 월 요일
  return `0 ${hour} * * ${day}`; // 매주 특정 요일의 특정 시간에 실행
}
