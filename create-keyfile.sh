#!/bin/bash

# mongodb 디렉토리 생성
mkdir -p mongodb

# keyfile 생성
openssl rand -base64 756 > mongodb/mongodb.key

# 권한 설정 (600이 아닌 400으로 더 엄격하게 설정)
chmod 400 mongodb/mongodb.key

# 현재 사용자를 소유자로 설정
chown $USER mongodb/mongodb.key