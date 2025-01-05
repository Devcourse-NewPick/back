<<<<<<< HEAD
# back

## **프로젝트 개요**

뉴픽(NewPick)은 사용자가 관심 분야를 설정하면 최신 뉴스를 AI 맞춤형으로 받아볼 수 있는 직관적이고 사용자 친화적인 뉴스레터 서비스입니다. 백엔드 시스템은 Nest.js 기반으로 구축되어 안정성과 확장성을 제공합니다. AI 기반 뉴스 요약과 효율적인 크롤링 기능을 통해 대량의 데이터를 빠르게 처리하고 이메일 뉴스레터 서비스까지 제공합니다. PostgreSQL, MongoDB, Redis를 사용해 데이터 저장 및 캐싱을 관리하며, 대용량 트래픽에도 견딜 수 있는 구조로 설계되었습니다.

---

## **주요 기능**

### **1. 사용자 관리 API**

- **회원가입 및 로그인**: 이메일 및 소셜 로그인(OAuth 2.0) 지원.
- **프로필 관리**: 관심 분야 설정 및 뉴스레터 수신 주기 설정.

### **2. 뉴스 크롤링 API**

- **정적 페이지 크롤링**: `cheerio`로 HTML을 파싱하여 뉴스 데이터를 추출.
- **동적 페이지 크롤링**: `puppeteer`로 JavaScript 렌더링이 필요한 페이지 수집.

### **3. AI 요약 및 뉴스 추천 API**

- **OpenAI API 연동**: 뉴스 본문 요약 및 주요 키워드 추출.
- **추천 알고리즘**: 사용자의 관심사에 기반하여 유사 뉴스 추천.

### **4. 뉴스레터 생성 및 발송 API**

- **뉴스레터 자동 생성**: 설정된 주기(일간, 주간, 월간)대로 생성.
- **이메일 발송**: `nodemailer`를 통해 뉴스레터 발송.
- **발송 실패 대응**: `BullMQ`와 `Redis`를 사용하여 재시도 처리.

### **5. 피드백 수집 및 분석 API**

- **별점 및 의견 제출**: 뉴스레터에 대한 사용자 평가 수집.
- **피드백 데이터 분석**: 추천 모델 개선을 위한 분석.

---

## **기술 스택**

### **1. 백엔드 프레임워크**

- **Nest.js**: 모듈 기반의 확장성과 유지보수성이 뛰어난 Node.js 프레임워크.
- **TypeScript**: 타입 안정성을 통해 코드 가독성 및 유지보수성 향상.

### **2. 데이터베이스 및 캐싱**

- **PostgreSQL**: 관계형 데이터베이스로 사용자 및 뉴스레터 데이터 저장.
- **MongoDB**: 비정형 데이터(크롤링된 뉴스 데이터) 저장.
- **Redis**: 작업 큐 및 데이터 캐싱을 위한 인메모리 데이터베이스.

### **3. AI 서비스**

- **OpenAI API**: 뉴스 본문을 요약하고 주요 키워드 추출.
- **향후 계획**: 비용 최적화를 위해 Hugging Face 모델 도입 검토.

### **4. DevOps 및 배포**

- **Docker**: 컨테이너를 사용하여 환경에 독립적인 서비스 실행.
- **AWS**: EC2(서버), RDS(DB), S3(정적 파일 저장) 사용.
- **GitHub Actions**: CI/CD 파이프라인 설정을 통해 자동화된 배포.
- **NGINX**: 리버스 프록시 및 로드 밸런서 역할.

---

## **아키텍처 개요**

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

## **주요 모듈 설명**

### **1. 인증 및 사용자 관리 모듈 (`auth/`)**

- **기능**: JWT 토큰 기반 인증 및 소셜 로그인.
- **라이브러리**: `@nestjs/jwt`, `passport-jwt`, `bcrypt`.

### **2. 뉴스 크롤링 모듈 (`crawling/`)**

- **기능**: 뉴스 웹사이트에서 최신 뉴스를 수집.
- **라이브러리**: `cheerio`(정적 페이지), `puppeteer`(동적 페이지).

### **3. AI 요약 및 추천 모듈 (`ai-summary/`)**

- **기능**: OpenAI API를 통해 뉴스 본문을 요약 및 추천.
- **예정 기능**: 뉴스 본문을 자체 학습 모델로 전환하여 비용 최적화.

### **4. 뉴스레터 생성 및 발송 모듈 (`newsletter/`)**

- **기능**: 뉴스레터 생성 및 이메일 발송.
- **라이브러리**: `@nestjs-modules/mailer`, `nodemailer`.
- **에러 처리**: `BullMQ`를 사용해 발송 실패 시 재시도 로직.

### **5. 피드백 수집 모듈 (`feedback/`)**

- **기능**: 뉴스레터에 대한 사용자 피드백 수집.
- **활용**: 피드백 데이터를 분석해 추천 모델 최적화.

---

## **API 주요 기능 및 설명**

### **사용자 관리 API**

- **POST /auth/signup**: 회원가입 요청.
- **POST /auth/login**: 로그인 요청.
- **GET /user/profile**: 사용자 프로필 조회 및 수정.

### **뉴스 크롤링 API**

- **GET /news/crawl**: 주요 뉴스 사이트에서 최신 뉴스 데이터 수집.

### **AI 뉴스 요약 및 추천 API**

- **POST /news/summary**: 입력된 뉴스 본문을 AI로 요약.
- **GET /news/recommend**: 사용자 관심사를 기반으로 뉴스 추천.

### **뉴스레터 발송 API**

- **POST /newsletter/send**: 뉴스레터 발송 요청.
- **GET /newsletter/preview**: 뉴스레터 미리보기.

### **피드백 수집 API**

- **POST /feedback**: 뉴스레터 피드백 제출.

---

## **에러 및 대응 방안**

### **1. 뉴스 크롤링 실패**

- **원인**: 웹사이트 구조 변경.
- **대응 방안**: 크롤링 실패 시 로그를 기록하고, 개발팀에 자동 알림 전송.

### **2. 이메일 발송 실패**

- **원인**: SMTP 서버 연결 문제.
- **대응 방안**: `BullMQ` 큐를 통해 일정 횟수 재시도.

### **3. AI API 응답 실패**

- **원인**: OpenAI API의 응답 지연 또는 실패.
- **대응 방안**: 기본 뉴스 요약 텍스트를 제공하여 서비스 중단 방지.

---

## **프로젝트 실행 방법**

### **1. 설치 및 실행**

```
# 프로젝트 클론

# 의존성 설치
npm install

# 환경 변수 설정

# 개발 서버 실행
npm run start:dev
```

### **2. 주요 환경 변수 설정**

```
추후 업데이트 예정 
```

---

## **추가 기능 계획**

1. **다국어 뉴스 요약 지원**: 영어, 일본어 등 다양한 언어로 뉴스 제공.
2. **음성 뉴스레터 기능**: 텍스트 뉴스레터를 오디오 파일로 변환하여 제공.
3. **구독자 통계 기능**: 뉴스레터 열람 및 클릭 데이터를 분석해 맞춤형 보고서 생성.
=======
<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ npm install -g mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
>>>>>>> b32725c (INITIAL COMMIT)
