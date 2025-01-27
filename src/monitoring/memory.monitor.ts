import * as Sentry from '@sentry/node';
import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import * as os from 'os';
@Injectable()
export class MemoryMonitorService {
  private readonly logger = new Logger(MemoryMonitorService.name);
  private readonly MEMORY_THRESHOLDS = [50, 60, 70, 80, 90];
  private lastReportedThreshold = 0;

  @Cron(CronExpression.EVERY_MINUTE)
  async checkMemoryUsage() {
    const used = process.memoryUsage();
    const totalMemory = os.totalmem();
    const freeMemory = os.freemem();

    // macOS의 실제 사용 가능한 메모리를 고려한 계산
    const processMemoryUsagePercent = (used.rss / totalMemory) * 100;

    // 시스템 메모리 사용률 계산 수정
    // macOS는 사용 가능한 메모리를 다르게 관리하므로, 실제 프로세스가 사용하는 메모리만 고려
    const systemMemoryUsagePercent = (used.rss / totalMemory) * 100;

    // 로깅에 프로세스 ID 추가
    const memoryInfo = {
      processInfo: {
        rss: `RSS (실제 사용 메모리): ${this.formatBytes(used.rss)}`,
        heapTotal: `Heap Total: ${this.formatBytes(used.heapTotal)}`,
        heapUsed: `Heap Used: ${this.formatBytes(used.heapUsed)}`,
        external: `External: ${this.formatBytes(used.external)}`,
        arrayBuffers: `Array Buffers: ${this.formatBytes(used.arrayBuffers || 0)}`,
        pid: `PID: ${process.pid}`,
        uptime: `Uptime: ${process.uptime()}`,
      },
      systemMemory: {
        totalMemory: `총 메모리: ${this.formatBytes(totalMemory)}`,
        availableMemory: `사용 가능한 메모리: ${this.formatBytes(freeMemory)}`,
        nodeProcessUsage: `Node 프로세스 메모리 사용률: ${systemMemoryUsagePercent.toFixed(2) + '%'}`,
      },
    };

    this.logger.debug(memoryInfo);

    const exceededThreshold = this.MEMORY_THRESHOLDS.find(
      (threshold) =>
        processMemoryUsagePercent >= threshold &&
        threshold > this.lastReportedThreshold,
    );

    if (exceededThreshold) {
      const memoryInfo = {
        processInfo: {
          pid: process.pid,
          uptime: process.uptime(),
        },
        memory: {
          process: {
            rss: this.formatBytes(used.rss),
            heapTotal: this.formatBytes(used.heapTotal),
            heapUsed: this.formatBytes(used.heapUsed),
            external: this.formatBytes(used.external),
            arrayBuffers: this.formatBytes(used.arrayBuffers || 0),
            memoryUsagePercent: processMemoryUsagePercent.toFixed(2) + '%',
          },
          system: {
            totalMemory: this.formatBytes(totalMemory),
            availableMemory: this.formatBytes(freeMemory),
            nodeProcessUsage: systemMemoryUsagePercent.toFixed(2) + '%',
          },
        },
      };

      // Sentry에 에러 보고
      Sentry.captureMessage(
        `높은 메모리 사용량 감지: ${exceededThreshold}% 초과`,
        {
          level: this.getSeverityLevel(exceededThreshold),
          tags: {
            type: 'memory_warning',
            threshold: exceededThreshold,
          },
          extra: memoryInfo,
        },
      );

      this.logger.warn(
        `메모리 사용량 경고: ${exceededThreshold}% 초과\n${JSON.stringify(memoryInfo, null, 2)}`,
      );

      this.lastReportedThreshold = exceededThreshold;
    }
    return memoryInfo;
  }

  private getSeverityLevel(threshold: number): Sentry.SeverityLevel {
    if (threshold >= 90) return 'fatal';
    if (threshold >= 80) return 'error';
    if (threshold >= 70) return 'warning';
    return 'info';
  }

  private formatBytes(bytes: number): string {
    if (bytes === 0) return '0 B';

    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB', 'TB'];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }
}
