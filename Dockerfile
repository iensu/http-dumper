FROM node:12-alpine

COPY ./ /app

WORKDIR /app

RUN npm ci

ENTRYPOINT ["node", "index.js"]