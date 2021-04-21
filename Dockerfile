FROM node:12-alpine AS build-env

COPY ./ /app

WORKDIR /app

RUN npm ci --only=production

FROM gcr.io/distroless/nodejs:12
COPY --from=build-env /app /app
WORKDIR /app

CMD ["index.js"]
