import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  HttpStatus,
  HttpException,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

interface Response<T> {
  data: T;
  message?: string;
}

@Injectable()
export class CommonResponseInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map((response: Response<any>) => {
        const statusCode: HttpStatus = context
          .switchToHttp()
          .getResponse().statusCode;
        const message = response.message || '';
        const data = response.data || response;
        return {
          statusCode,
          message,
          timestamp: new Date().toISOString(),
          dataCount: Array.isArray(data) ? data.length : 1,
          data,
        };
      }),
      catchError((error) => {
        const status = error.status || HttpStatus.INTERNAL_SERVER_ERROR;
        let errorMessage = error.message;

        // ValidationPipe 에러 처리
        if (error.response && error.response.message) {
          errorMessage = Array.isArray(error.response.message)
            ? error.response.message
            : [error.response.message];
        }

        throw new HttpException(
          {
            statusCode: status,
            timestamp: new Date().toISOString(),
            errorTitle: error.name || 'ValidationError',
            errorMessage: errorMessage,
          },
          status,
        );
      }),
    );
  }
}
