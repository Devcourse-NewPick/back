# 📰 뉴픽 백엔드

### **📌 프로젝트 개요**

뉴픽(NewPick) 서비스는 사용자가 관심 분야를 설정하면 최신 뉴스를 AI 맞춤형으로 받아볼 수 있는 직관적이고 사용자 친화적인 뉴스레터 서비스입니다. 

AI 기반 뉴스 요약과 효율적인 크롤링 기능을 통해 대량의 데이터를 빠르게 처리하고 이메일 뉴스레터 서비스까지 제공합니다. 

백엔드 시스템은 NestJS 기반으로 구축하여 안정성과 확장성을 확보하였으며, MySQL, MongoDB, Redis를 사용해 데이터 저장 및 캐싱을 관리하는 구조로 설계되었습니다.

---

### **📌 주요 기능**

#### **1. 사용자 관리**

- **회원가입 및 로그인**: 이메일 및 소셜 로그인(OAuth 2.0) 지원.
- **프로필 관리**: 관심 분야 설정 및 뉴스레터 수신 주기 설정.

#### **2. 뉴스 크롤링**

- **페이지 크롤링**: 크롤러로 브라우저 페이지에서 필요한 정보 수집.

#### **3. AI 요약 및 뉴스 추천**

- **OpenAI API 연동**: 뉴스 본문 요약 및 주요 키워드 추출.
- **추천 알고리즘**: 사용자의 관심사에 기반하여 유사 뉴스 추천.

#### **4. 뉴스레터 생성 및 발송**

- **뉴스레터 자동 생성**: 설정된 주기(일간, 주간, 월간)대로 생성.
- **이메일 발송**: `nodemailer`를 통해 뉴스레터 발송.
- **발송 실패 대응**: `BullMQ`와 `Redis`를 사용하여 재시도 처리.

#### **5. 피드백 수집 및 분석**

- **별점 및 의견 제출**: 뉴스레터에 대한 사용자 평가 수집.
- **피드백 데이터 분석**: 추천 모델 개선을 위한 분석.

---

### **📌 기술 스택**

#### **1. 백엔드 프레임워크**

- **NestJS**: 모듈 기반의 확장성과 유지보수성이 뛰어난 Node.js 프레임워크.
- **TypeScript**: 타입 안정성을 통해 코드 가독성 및 유지보수성 향상.

#### **2. 데이터베이스 및 캐싱**

- **MySQL**: 관계형 데이터베이스로 사용자 및 뉴스레터 데이터 저장.
- **MongoDB**: 비정형 데이터(크롤링 데이터) 저장.
- **Redis**: 작업 큐 및 데이터 캐싱을 위한 인메모리 데이터베이스.

#### **3. AI 서비스**

- **OpenAI API**: 뉴스 본문을 요약하고 주요 키워드 추출.
- **향후 계획**: 비용 최적화를 위해 Hugging Face 모델 도입 검토.

#### **4. DevOps 및 배포**

- **Docker**: 컨테이너를 사용하여 환경에 독립적인 서비스 실행.
- **AWS**: EC2(서버), RDS(DB), S3(정적 파일 저장) 사용.
- **GitHub Actions**: CI/CD 파이프라인 설정을 통해 자동화된 배포.
- **NGINX**: 리버스 프록시 및 로드 밸런서 역할.

---

### **📌 아키텍처 개요**

```
backend/
├── src/
│   ├── api/                 # API 라우팅 및 컨트롤러
│   ├── auth/                # 사용자 인증 및 관리 모듈
│   ├── newsletter/          # 뉴스레터 생성 및 발송 모듈
│   ├── crawling/            # 뉴스 크롤링 모듈
│   ├── feedback/            # 피드백 수집 및 분석 모듈
│   ├── ai-summary/          # AI 요약 및 추천 모듈
│   ├── database/            # 데이터베이스 설정 및 Prisma 스키마
│   └── app.module.ts        # 메인 모듈 설정
└── package.json             # 프로젝트 설정 및 의존성 목록
```

---

### **📌 주요 모듈 설명**

#### **1. 인증 및 사용자 관리 모듈 (`auth/`)**

- **기능**: JWT 토큰 기반 인증 및 소셜 로그인.
- **라이브러리**: `@nestjs/jwt`, `passport-jwt`, `bcrypt`.

#### **2. 뉴스 크롤링 모듈 (`crawling/`)**

- **기능**: 뉴스 웹사이트에서 최신 뉴스를 수집.
- **라이브러리**: `puppeteer`, `p-queue`, `mongoose`.

#### **3. AI 요약 및 추천 모듈 (`ai-summary/`)**

- **기능**: OpenAI API를 통해 뉴스 본문을 요약 및 추천.
- **예정 기능**: 뉴스 본문을 자체 학습 모델로 전환하여 비용 최적화.

#### **4. 뉴스레터 생성 및 발송 모듈 (`newsletter/`)**

- **기능**: 뉴스레터 생성 및 이메일 발송.
- **라이브러리**: `@nestjs-modules/mailer`, `nodemailer`.
- **에러 처리**: `BullMQ`를 사용해 발송 실패 시 재시도 로직.

#### **5. 피드백 수집 모듈 (`feedback/`)**

- **기능**: 뉴스레터에 대한 사용자 피드백 수집.
- **활용**: 피드백 데이터를 분석해 추천 모델 최적화.

---

### **📌 API 기능 및 설명**

#### **사용자 관리 API**

- **POST /auth/signup**: 회원가입 요청.
- **POST /auth/login**: 로그인 요청.
- **GET /user/profile**: 사용자 프로필 조회 및 수정.

#### **AI 뉴스 요약 및 추천 API**

- **POST /news/summary**: 입력된 뉴스 본문을 AI로 요약.
- **GET /news/recommend**: 사용자 관심사를 기반으로 뉴스 추천.

#### **뉴스레터 발송 API**

- **POST /newsletter/send**: 뉴스레터 발송 요청.
- **GET /newsletter/preview**: 뉴스레터 미리보기.

#### **피드백 수집 API**

- **POST /feedback**: 뉴스레터 피드백 제출.

---

### **📌 에러 및 대응 방안**

#### **1. 이메일 발송 실패**

- **원인**: SMTP 서버 연결 문제.
- **대응 방안**: `BullMQ` 큐를 통해 일정 횟수 재시도.

#### **2. AI API 응답 실패**

- **원인**: OpenAI API의 응답 지연 또는 실패.
- **대응 방안**: 기본 뉴스 요약 텍스트를 제공하여 서비스 중단 방지.

---

### **📌 프로젝트 실행 방법**

```
# 1. 프로젝트 클론
git clone 

# 2. 의존성 설치
npm install

# 3. 환경 변수 설정

# 4. 개발 서버 실행
npm run start:dev
```

---

## **추가 기능 계획**

1. **다국어 뉴스 요약 지원**: 영어, 일본어 등 다양한 언어로 뉴스 제공.
2. **음성 뉴스레터 기능**: 텍스트 뉴스레터를 오디오 파일로 변환하여 제공.
3. **구독자 통계 기능**: 뉴스레터 열람 및 클릭 데이터를 분석해 맞춤형 보고서 생성.

## 데이터베이스 설정 가이드

### 2. 데이터베이스 접속 정보

#### MongoDB
- **Primary**: localhost:27017
- **Secondary 1**: localhost:27018
- **Secondary 2**: localhost:27019
- **Database**: newpick
- **Username**: root
- **Password**: root
- **Connection URL**: `mongodb://root:root@localhost:27017,localhost:27018,localhost:27019/newpick?authSource=admin&replicaSet=myReplicaSet`

#### MySQL
- **Host**: localhost
- **Port**: 3308
- **Database**: newpick
- **Username**: root
- **Password**: root
- **Connection URL**: `mysql://root:root@localhost:3308/newpick`

### 3. Prisma 스키마 적용

```bash
# MongoDB 스키마 적용
npm run prisma:generate:mongodb
npm run prisma:push:mongodb

# MySQL 스키마 적용
npm run prisma:generate:mysql
npm run prisma:push:mysql
```

### DB 세팅 테스트
`npm run test:mongodb`
`npm run test:mysql`


### 4. GUI 도구 연결

#### MongoDB Compass
1. MongoDB Compass 설치
2. 새 연결 생성
3. 연결 문자열 입력:
```
mongodb://root:root@localhost:27017,localhost:27018,localhost:27019/newpick?authSource=admin&replicaSet=myReplicaSet
```

#### MySQL Workbench
1. MySQL Workbench 설치
2. 새 연결 생성:
   - Hostname: localhost
   - Port: 3308
   - Username: root
   - Password: root
   - Database: newpick

### 주의사항
- prisma/generate, migrations 파일은 commit 하지 마세요

## 스키마 & 데이터 관리 가이드

### 스키마 변경하기

1. Prisma 스키마 파일 수정
```prisma
// MySQL: prisma/mysql.schema.prisma

model User {
  id        String   @id @default(auto()) @map("_id") @mongodb.ObjectId
  email     String   @unique
  name      String?
  // 새 필드 추가
  phone     String?  
}
```

2. 변경사항 적용
```bash
# MongoDB의 경우
npx prisma db push --schema=prisma/mongodb.schema.prisma

# MySQL의 경우
npx prisma migrate dev --name add_field --schema=prisma/mysql.schema.prisma
```

### Prisma Studio로 데이터 관리하기

```bash
# MongoDB 데이터 관리
npx prisma studio --schema=prisma/mongodb.schema.prisma

# MySQL 데이터 관리
npx prisma studio --schema=prisma/mysql.schema.prisma
```

Prisma Studio 기능:
- 웹 브라우저에서 데이터 조회/추가/수정/삭제
- 테이블 간 관계 확인
- 필터링 및 정렬
- JSON 데이터 직접 편집

접속 방법:
1. 위 명령어 실행
2. 브라우저에서 `http://localhost:5555` 접속
3. 원하는 모델 선택하여 데이터 관리

# Npm list 버젼 맞추기. **✨필수✨**
```
├── @elastic/elasticsearch@8.17.0
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
├── @prisma/client@6.2.0
├── @redis/client@1.6.0
├── @types/bcrypt@5.0.2
├── @types/express@5.0.0
├── @types/jest@29.5.14
├── @types/mongoose@5.11.96
├── @types/node@20.17.11
├── @types/passport-google-oauth20@2.0.16
├── @types/supertest@6.0.2
├── @typescript-eslint/eslint-plugin@8.19.0
├── @typescript-eslint/parser@8.19.0
├── axios@1.7.9
├── bcrypt@5.1.1
├── bull@4.16.5
├── cache-manager-ioredis@2.1.0
├── cache-manager-redis-store@3.0.1
├── cache-manager@5.7.6
├── class-transformer@0.5.1
├── class-validator@0.14.1
├── dotenv@16.4.7
├── eslint-config-prettier@9.1.0
├── eslint-plugin-prettier@5.2.1
├── eslint@8.57.1
├── ioredis@5.4.2
├── jest@29.7.0
├── mongoose@8.9.3
├── node-cron@3.0.3
├── nodemailer@6.9.16
├── openai@4.77.3
├── passport-google-oauth20@2.0.0
├── passport-jwt@4.0.1
├── passport@0.7.0
├── prettier@3.4.2
├── prisma@6.2.0
├── puppeteer@23.11.1
├── redis@4.7.0
├── reflect-metadata@0.2.2
├── rxjs@7.8.1
├── source-map-support@0.5.21
├── supertest@7.0.0
├── ts-jest@29.2.5
├── ts-loader@9.5.1
├── ts-node-dev@2.0.0
├── ts-node@10.9.2
├── tsconfig-paths@4.2.0
├── typescript@5.7.2
└── uuid@11.0.4
```
