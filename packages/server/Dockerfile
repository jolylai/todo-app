FROM node:lts-alpine

WORKDIR /app

COPY ./package.json .

RUN yarn config set registry https://registry.npm.taobao.org
RUN yarn

COPY . .

EXPOSE 8888

CMD ['yarn', 'start']