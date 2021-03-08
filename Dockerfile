FROM node:15.11.0-buster-slim

WORKDIR /usr/

COPY package*.json ./

RUN yarn install

EXPOSE 3000

CMD [ "yarn", "start" ]