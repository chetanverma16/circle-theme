FROM node:21-alpine3.18 as build

LABEL maintainer="Kamyab Rouhfar <karouhifar@gmail.com>"
LABEL description="TechFi Web Application"
LABEL version="1.0.0"

WORKDIR /app

COPY package*.json .env ./


RUN npm ci --legacy-peer-deps

COPY . .

RUN npm run build

CMD ["npm", "run", "develop"]