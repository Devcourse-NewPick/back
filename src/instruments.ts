// Import with `const Sentry = require("@sentry/nestjs");` if you are using CJS
import * as Sentry from '@sentry/nestjs';
import { nodeProfilingIntegration } from '@sentry/profiling-node';
import * as dotenv from 'dotenv';

// .env 파일을 직접 로드
dotenv.config({ path: '.env' });

// Sentry 초기화 전에 DSN 확인
const dsn = process.env.SENTRY_DSN;
if (!dsn) {
  console.error('SENTRY_DSN is not set in environment variables');
  process.exit(1); // DSN이 없으면 애플리케이션 종료
}

console.log('Initializing Sentry with DSN:', dsn);

Sentry.init({
  dsn,
  integrations: [nodeProfilingIntegration()],
  tracesSampleRate: 1.0,
  profilesSampleRate: 1.0,
  enabled: true,
  environment: process.env.NODE_ENV || 'development',
  beforeSend(event) {
    // 디버그 로그 추가
    return event;
  },
});

// DSN 확인을 위한 디버그 로그
console.log('Sentry DSN:', process.env.SENTRY_DSN);

// Manually call startProfiler and stopProfiler
// to profile the code in between
Sentry.profiler.startProfiler();

// Starts a transaction that will also be profiled
Sentry.startSpan(
  {
    name: 'My First Transaction',
  },
  () => {
    console.log('Transaction started');
  },
);

// Calls to stopProfiling are optional - if you don't stop the profiler, it will keep profiling
// your application until the process exits or stopProfiling is called.
Sentry.profiler.stopProfiler();
