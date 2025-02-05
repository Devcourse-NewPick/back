<aside>
🔥

배포된 기준으로 정리된 버젼입니다. **_05.02.2025**

</aside>

# 🗞 뉴픽: NewPick

## **프로젝트 개요**

`뉴픽(NewPick)` 서비스는 사용자가 관심 분야를 설정하면 최신 뉴스를 AI 맞춤형으로 받아볼 수 있는 직관적이고 사용자 친화적인 뉴스레터 서비스입니다.

AI 기반 뉴스 요약과 효율적인 크롤링 기능을 통해 대량의 데이터를 빠르게 처리하고 이메일 뉴스레터 서비스까지 제공합니다.

백엔드 시스템은 NestJS 기반으로 구축하여 안정성과 확장성을 확보하였으며, MySQL과 MongoDB를 사용해 데이터 저장을 관리하는 구조로 설계되었습니다. (**Redis는 일부 캐싱 및 작업 큐로 사용됨**)

---

## ⚙**기술 스택**

### **1. 백엔드 (NestJS 기반)**

| 기술 | 역할 |
| --- | --- |
| **NestJS (TypeScript)** | 모듈 기반 백엔드 프레임워크 |
| **Prisma ORM + GCP MySQL** | 사용자 및 구독 데이터 저장 |
| **MongoDB Atlas** | AI 요약 및 크롤링 데이터 저장 |
| **Puppeteer** | 네이버 뉴스 크롤링 |
| **OpenAI API** | 뉴스 요약 생성 |
| **Google OAuth + JWT** | 로그인 및 인증 관리 |
| **Nodemailer** | 뉴스레터 이메일 발송 |
| **Sentry** | 서버 모니터링 및 에러 로깅 |
| **SSL 인증** | HTTPS 기반 보안 적용 |

### **2. 배포 및 운영**

| 기술 | 역할 |
| --- | --- |
| **AWS EC2 (Ubuntu)** | 백엔드 서버 배포 |
| **GitHub Actions** | CI/CD 자동화 |
| **Vercel** | 프론트엔드 배포 |
| **GCP MySQL** | 유저 및 구독 데이터 저장 |
| **MongoDB Atlas** | 크롤링된 뉴스 및 AI 요약 저장 |
| **Nginx** |  리버스 프록시 및 로드 밸런싱 |
| **Node** | NestJS 실행 환경 |

### **3. 프론트엔드 (Next.js 기반)**

| 기술 | 역할 |
| --- | --- |
| **Next.js + React** | SSR 및 클라이언트 사이드 렌더링 |
| **React Query** | API 상태 관리 (데이터 캐싱) |
| **Zustand** | 전역 상태 관리 (JWT, 유저 정보) |
| **Fetch / Axios** | 백엔드 API 통신 |

## 📌 주요 기능

### 1. 사용자 관리

- 회원가입 및 로그인: 이메일 및 Google 소셜 로그인(OAuth 2.0) 지원
- 프로필 관리: 관심 분야 설정 및 뉴스레터 수신 주기 설정
- 구독 관리: 구독 일시 정지 및 취소 기능 지원

### 2. 뉴스 크롤링

- **Puppeteer**를 이용하여 웹 페이지에서 최신 뉴스 크롤링

### 3. AI 요약 및 뉴스 추천

- **OpenAI API**를 연동하여 뉴스 본문 요약 및 주요 키워드 추출
- 사용자의 관심사를 기반으로 유사 뉴스 추천

### 4. 뉴스레터 생성 및 발송

- 사용자 설정 주기에 맞춰 뉴스레터 자동 생성 (일간, 주간, 월간)
- **Nodemailer**를 이용하여 뉴스레터 이메일 발송
- 뉴스레터 북마크 기능 추가

### 5. 피드백 및 사용자 반응 분석

- 사용자의 뉴스레터 평가(별점 및 의견) 수집
- 피드백 데이터를 분석하여 추천 모델 개선
- 뉴스레터 북마크 기능 제공

## 📌 주요 모듈 설명

### 1. 인증 및 사용자 관리 모듈 (auth/)

- 기능: JWT 토큰 기반 인증 및 소셜 로그인
- 라이브러리: @nestjs/jwt, passport-jwt, bcrypt

### 2. 뉴스 크롤링 모듈 (crawling/)

- 기능: 뉴스 웹사이트에서 최신 뉴스 수집
- 라이브러리: puppeteer, p-queue, mongoose

### 3. AI 요약 및 추천 모듈 (ai-summary/)

- 기능: OpenAI API를 통해 뉴스 본문 요약 및 추천
- 자체 학습 모델 적용 검토 중

### 4. 뉴스레터 생성 및 발송 모듈 (newsletter/)

- 기능: 뉴스레터 생성 및 이메일 발송
- 라이브러리: @nestjs-modules/mailer, nodemailer
- 에러 처리: BullMQ를 사용해 발송 실패 시 재시도 로직 적용

### 5. 피드백 및 북마크 관리 모듈 (feedback/)

- 기능: 뉴스레터 피드백 수집 및 북마크 저장
- 활용: 피드백 데이터를 분석해 추천 모델 최적화

### 6. 관리자 모듈 (admin/)

- 기능: 관리자 계정 관리 및 서비스 모니터링

### 7. 카테고리 관리 모듈 (category/)

- 기능: 뉴스 카테고리 CRUD

### 8. 뉴스 저장소 모듈 (repository/)

- 기능: AI 요약 로그, 이메일 아카이브 및 뉴스레터 저장 관리

### 9. 마이페이지 모듈 (mypage/)

- 기능: 사용자 맞춤형 정보 제공 및 개인화 설정 관리

### 10. 구독자 관리 모듈 (subscriber/)

- 기능: 구독자 관련 정보 관리 및 뉴스레터 발송 대상 관리

### 11. 스케줄러 모듈 (scheduler/)

- 기능: 뉴스레터 발송 일정 관리 및 자동화 처리

### 12. 공통 유틸리티 및 미들웨어 (common/, middleware/)

- 기능: 공통적으로 사용되는 인터페이스, 헬퍼 함수 및 미들웨어 관리

### 13. 서비스 모니터링 (monitoring/)

- 기능: 메모리 사용량 모니터링 및 성능 최적화

### 14. 유저 모듈 (user/)

- 기능: 등록된 유저 관련 기능 관리

## 📌 API 기능 및 설명

### 사용자 관리 API

- POST /auth/signup: 회원가입 요청
- POST /auth/login: 로그인 요청
- GET /user/profile: 사용자 프로필 조회 및 수정
- PATCH /user/pause-subscription: 구독 일시 정지
- DELETE /user/cancel-subscription: 구독 취소

### AI 뉴스 요약 및 추천 API

- POST /news/summary: 입력된 뉴스 본문을 AI로 요약
- GET /news/recommend: 사용자 관심사를 기반으로 뉴스 추천

### 뉴스레터 API

- POST /newsletter/send: 뉴스레터 발송 요청
- GET /newsletter/preview: 뉴스레터 미리보기
- POST /newsletter/bookmark: 뉴스레터 북마크 저장
- GET /newsletter/bookmarks: 북마크된 뉴스레터 조회

### 피드백 수집 API

- POST /feedback: 뉴스레터 피드백 제출
- GET /feedback/list: 뉴스레터 피드백 조회

## 📌 아키텍처 개요

```
backend/
├── .github/               # 깃허브 액션즈 CI/CD - AWS EC2
├── prisma/                # Prisma ORM 설정 및 MySQL 관리
├── scripts/               # 데이터 및 환경 설정 자동화 스크립트
├── test/                  # E2E(엔드 투 엔드) 테스트 환경
├── src/
│   ├── admin/               # 관리자 기능
│   ├── ai-summary/          # AI 요약 및 추천
│   ├── auth/                # 사용자 인증 및 관리
│   ├── category/            # 뉴스 카테고리 관리
│   ├── common/              # 공통 유틸리티 및 인터페이스
│   ├── crawling/            # 뉴스 크롤링
│   ├── feedback/            # 피드백 및 북마크 관리
│   ├── mail/                # 메일 발송 설정
│   ├── middleware/          # 요청 로깅 및 보안 관련 미들웨어
│   ├── monitoring/          # 서비스 모니터링
│   ├── mypage/              # 마이페이지 기능
│   ├── news/                # 뉴스 관련 데이터 관리
│   ├── repository/          # 데이터 저장소 관리
│   ├── scheduler/           # 스케줄링 및 자동화
│   ├── subscriber/          # 구독자 관리
│   ├── user/                # 사용자 정보 관리
│   ├── app.controller.ts    # 메인 컨트롤러
│   ├── app.module.ts        # 앱 모듈 정의
│   ├── app.service.ts       # 기본 서비스 로직
│   ├── global.filters.ts    # 전역 예외 처리 필터
│   ├── instrument.ts        # 서비스 내부 측정 로직
│   ├── main.ts              # 애플리케이션 엔트리 포인트
├── .env                    # 환경 변수 파일
├── docker-compose.yml      # Docker 서비스 구성 파일
├── Dockerfile              # 백엔드 서버 Docker 빌드 파일
├── nest-cli.json           # NestJS CLI 설정 파일
├── package-lock.json       # 패키지 버전 고정 파일
├── package.json            # 패키지 관리 및 실행 스크립트 설정
├── README.md               # 프로젝트 설명 및 실행 방법 문서
├── tsconfig.build.json     # TypeScript 빌드 설정
└── tsconfig.json           # TypeScript 설정

```

---

## **에러 및 대응 방안**

### **1. JWT 인증 실패**

- **원인**:
    - 만료된 JWT 토큰 사용
    - 잘못된 서명 또는 변조된 토큰
    - 서버에서 발급한 토큰이 삭제됨 (로그아웃 처리 등)
- **대응 방안**:
    - 만료된 토큰에 대해 `401 Unauthorized` 반환 후, 프론트엔드에서 자동 로그아웃 처리
    - Refresh Token을 이용한 재발급 시스템 적용
    - 로그인할 때 새로운 Access Token을 생성하고, 기존 토큰을 무효화

---

### **2. 구독자 데이터 불일치**

- **원인**:
    - 구독 취소 후에도 뉴스레터가 계속 발송됨
    - 구독 상태가 올바르게 갱신되지 않음
    - 다중 요청으로 인해 동기화 문제 발생
- **대응 방안**:
    - 구독 변경 요청을 `트랜잭션(Transaction)`으로 처리하여 데이터 일관성 유지
    - 구독 상태 변경 후, 변경된 정보를 캐싱하여 최신 상태 유지
    - 뉴스레터 발송 시, 구독 상태를 한 번 더 검증 후 발송

---

### **3. 크롤링 데이터 저장 실패**

- **원인**:
    - 크롤링한 데이터가 MongoDB 저장 시 Schema 불일치 발생
    - MongoDB Atlas 연결 문제
    - 크롤링 중 페이지 접근 차단
- **대응 방안**:
    - 크롤링한 데이터를 저장 전에 유효성 검증 (Schema Validation)
    - MongoDB 연결 상태를 주기적으로 점검하고 재연결 시도
    - User-Agent 및 Proxy 사용으로 크롤링 차단 회피

---

### **4. AI 요약 내용 부정확성**

- **원인**:
    - OpenAI API에서 반환하는 요약이 부적절하거나 불완전함
    - 입력된 뉴스 본문이 너무 짧거나 가공되지 않음
    - 모델이 적절한 컨텍스트를 인식하지 못함
- **대응 방안**:
    - 요약 전 `전처리(Preprocessing)` 단계에서 뉴스 본문 정제
    - 기본적으로 `키워드 기반 요약 백업 시스템`을 적용하여 AI 응답 실패 시 대체
    - AI API 호출 후, 특정 조건(단어 수, 신뢰도 등)에 따라 요약을 보정

---

### **5. 뉴스레터 이메일 전송 지연**

- **원인**:
    - 뉴스레터를 발송할 구독자가 많아 SMTP 서버가 부하를 받음
    - `BullMQ` 큐에 과부하 발생
    - 이메일 본문 생성 과정에서 데이터베이스 조회가 지연됨
- **대응 방안**:
    - 뉴스레터 발송을 **배치(Batch) 처리**하여 부하를 분산
    - **이메일 전송 실패 시 재시도 로직 추가** (`BullMQ` 재시도 설정 조정)
    - 이메일 본문을 **사전에 캐싱**하여 생성 속도 향상

---

### **6. API 요청 과부하**

- **원인**:
    - 같은 요청을 짧은 시간 내에 반복적으로 요청 (DDOS 공격 가능성)
    - 무분별한 데이터 요청으로 인해 DB 조회 부하 발생
- **대응 방안**:
    - **Rate Limiting(속도 제한)** 적용 (`nestjs/throttler` 활용 가능)
    - **캐싱(Cache)** 적용하여 자주 요청되는 데이터를 저장 (Redis 사용 고려)
    - 대량 요청이 필요한 API에는 **비동기 Queue 시스템** 적용

---

### **7. 관리자 기능 악용 가능성**

- **원인**:
    - 관리자 API 엔드포인트가 제대로 보호되지 않음
    - 잘못된 권한 검증으로 인해 일반 사용자가 관리자 API에 접근 가능
- **대응 방안**:
    - 관리자 API에 **`Admin Guard` 적용**하여 관리자만 접근 가능하도록 설정
    - 모든 요청에 **로깅 및 감사 로그(Audit Log) 기록**
    - 관리자 기능 수행 시 **이중 인증(2FA)** 옵션 추가 고려

---

### **8. 데이터 정합성 문제**

- **원인**:
    - MySQL과 MongoDB 간 동기화 오류 발생 (예: 같은 뉴스가 중복 저장)
    - 트랜잭션 처리 없이 여러 테이블을 업데이트하는 경우 데이터 불일치 발생
- **대응 방안**:
    - **Prisma 트랜잭션(Transaction) 적용**하여 변경 사항을 원자적으로 처리
    - MongoDB 저장 전, 이미 존재하는 데이터인지 확인 후 저장
    - 특정 테이블 업데이트 후, 연관된 데이터도 동기화 실행

## **프로젝트 실행 방법**

### **1. 설치 및 실행**

```
# 의존성 설치
npm install

# 개발 서버 실행
npm run start:dev
```

### **2. 주요 환경 변수 설정**

```
OPENAI_API_KEY=
MONGO_URL=
JWT_REFRESH_SECRET=  #openssl rand -base64 32
JWT_SECRET= #openssl rand -base64 32
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
GOOGLE_REDIRECT_URI=

# # 백엔드 포트 번호
PORT="3001"

# # CORS 허용 주소
FRONTEND_URL=
MAIL_USER=
MAIL_PASSWORD=
SENTRY_DSN=
MYSQL_URL=
```

---

## 데이터베이스 설정 가이드

1. **MySQL**

```jsx
- **Host**: localhost
- **Port**: 3308
- **Database**: newpick
- **Connection URL**:
- **GUI**: MySQL Workbench
```

```
# 스키마 생성
npm run prisma:generate:mysql

# DB와 연동
npm run prisma:push:mysql

# DB와 연결 확인 테스트
npm run test:mysql
```

**MongoDB**

- **Connection URL**: 예시 👉🏼 `mongodb:`
- **GUI**: MongoDB Compass

```
# DB와 연결 확인 테스트
npm run test:mongodb
```

### 

1. **Prisma 사용 방법**

> **Prisma는 MySQL만 사용합니다. MongoDB는 Mongoose 라이브러리로 관리합니다.**
> 

**1. 스키마 변경하기**

- Prisma 스키마 파일 수정

```
// MySQL: prisma/mysql.schema.prisma
model User {
  id        String   @id @default(auto()) @map("_id") @mongodb.ObjectId
  email     String   @unique
  name      String?
  // 새 필드 추가
  phone     String?  
}
```

- 변경사항 적용 (오류시 package.json 참고)

```
npm run prisma:generate
npm run prisma:migrate
```

**2. Prisma Studio 접속 및 데이터 관리**

```
npm run prisma:studio
```

- **접속 방법**:
    - 위 명령어 실행
    - 브라우저에서 `http://localhost:5555` 접속
    - 원하는 모델 선택하여 데이터 관리
- **Prisma Studio 기능**:
    - 웹 브라우저에서 데이터 조회/추가/수정/삭제
    - 테이블 간 관계 확인
    - 필터링 및 정렬
    - JSON 데이터 직접 편집

### 3. Prisma 스키마 적용

```bash
# MySQL 스키마 적용
npx prisma generate --schema=prisma/mysql.schema.prisma
npx prisma migrate dev --schema=prisma/mysql.schema.prisma --name init
```

### 5. 데이터베이스 연결 확인

```bash
# Prisma Studio로 데이터베이스 확인 (MySQL)
npx prisma studio --schema=prisma/mysql.schema.prisma
```

**추가 기능 계획**

1. **다국어 뉴스 요약 지원**: 영어, 일본어 등 다양한 언어로 뉴스 제공.
2. **음성 뉴스레터 기능**: 텍스트 뉴스레터를 오디오 파일로 변환하여 제공.
3. **구독자 통계 기능**: 뉴스레터 열람 및 클릭 데이터를 분석해 맞춤형 보고서 생성.
4. **커뮤니티 기능** : 사용자 간의 커뮤니티 기능을 활성. (카테고리별/ 게시글, 댓글)

**Npm list 버전 맞추기 ✨필수✨**

```jsx
├── @elastic/elasticsearch@8.17.0
├── @esm2cjs/p-queue@7.3.0
├── @faker-js/faker@9.4.0
├── @nestjs-modules/ioredis@2.0.2
├── @nestjs-modules/mailer@2.0.2
├── @nestjs/axios@3.1.3
├── @nestjs/bull@10.2.3
├── @nestjs/cache-manager@2.3.0
├── @nestjs/cli@10.4.9
├── @nestjs/common@10.4.15
├── @nestjs/config@3.3.0
├── @nestjs/core@10.4.15
├── @nestjs/elasticsearch@10.0.2
├── @nestjs/jwt@10.2.0
├── @nestjs/mongoose@10.1.0
├── @nestjs/passport@10.0.3
├── @nestjs/platform-express@10.4.15
├── @nestjs/schedule@4.1.2
├── @nestjs/schematics@10.2.3
├── @nestjs/testing@10.4.15
├── @prisma/client@6.2.1
├── @redis/client@1.6.0
├── @sentry/nestjs@8.51.0
├── @sentry/profiling-node@8.51.0
├── @types/bcrypt@5.0.2
├── @types/express@5.0.0
├── @types/jest@29.5.14
├── @types/node@20.17.14
├── @types/passport-google-oauth20@2.0.16
├── @types/supertest@6.0.2
├── @types/webidl-conversions@7.0.3
├── @typescript-eslint/eslint-plugin@8.21.0
├── @typescript-eslint/parser@8.21.0
├── axios@1.7.9
├── bcrypt@5.1.1
├── bull@4.16.5
├── cache-manager-ioredis@2.1.0
├── cache-manager-redis-store@3.0.1
├── cache-manager@5.7.6
├── class-transformer@0.5.1
├── class-validator@0.14.1
├── cookie-parser@1.4.7
├── cross-env@7.0.3
├── dayjs@1.11.13
├── dotenv@16.4.7
├── eslint-config-prettier@9.1.0
├── eslint-plugin-prettier@5.2.3
├── eslint@8.57.1
├── glob@9.3.5
├── ioredis@5.4.2
├── jest@29.7.0
├── jsdom@26.0.0
├── mongoose@8.9.5
├── node-cron@3.0.3
├── nodemailer@6.9.16
├── openai@4.79.1
├── passport-google-oauth20@2.0.0
├── passport-jwt@4.0.1
├── passport@0.7.0
├── prettier@3.4.2
├── prisma@6.2.1
├── puppeteer@23.11.1
├── redis@4.7.0
├── reflect-metadata@0.2.2 
├── rimraf@4.4.1
├── rxjs@7.8.1
├── source-map-support@0.5.21
├── supertest@7.0.0
├── ts-jest@29.2.5
├── ts-loader@9.5.2
├── ts-node-dev@2.0.0
├── ts-node@10.9.2
├── tsconfig-paths@4.2.0
├── typescript@5.7.3
├── uuid@11.0.5
└── webidl-conversions@7.0.0
```