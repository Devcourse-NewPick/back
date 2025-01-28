# 1. Node.js 베이스 이미지 설정
FROM node:18

# 2. 컨테이너의 작업 디렉토리 설정
WORKDIR /app

# 3. package.json과 package-lock.json 복사
COPY package*.json ./

# 4. 의존성 설치 (TypeScript 빌드 포함)
RUN npm install

# 5. 모든 프로젝트 파일 복사
COPY . .

# 6. TypeScript 빌드 실행
RUN npm run build

# 7. 컨테이너 실행 시 노출할 포트
EXPOSE 3000

# 8. 실행 명령 (빌드된 JavaScript 파일 실행)
CMD ["node", "dist/main"]