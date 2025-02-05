import { Injectable, NestMiddleware, Logger } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class ConfigLoggerMiddleware implements NestMiddleware {
  private readonly logger = new Logger('ConfigModule');

  use(req: Request & { start?: number }, res: Response, next: NextFunction) {
    req.start = Date.now();
    // 요청 처리 완료 후 로깅
    res.on('finish', () => {
      this.logger.log({
        method: req.method,
        path: req.path,
        status: res.statusCode,
        body: req.body,
        params: req.params,
        query: req.query,
        userAgent: req.headers['user-agent'],
        duration: Date.now() - req.start,
      });
    });

    next();
  }
}
