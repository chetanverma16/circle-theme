FROM node:21-alpine3.18

WORKDIR /app

COPY . .

COPY package*.json .env ./

RUN npm ci --legacy-peer-deps

RUN npm run build

EXPOSE 8000

CMD ["npm", "run", "develop"]