FROM node:lts-alpine as builder

WORKDIR /app

COPY ./package.json .

RUN yarn config set registry https://registry.npm.taobao.org
RUN yarn

COPY . .

RUN yarn build

FROM nginx:stable-alpine

EXPOSE 80

COPY --from=builder /app/dist /usr/share/nginx/html