FROM node:alpine
WORKDIR /app
EXPOSE 80
EXPOSE 5000
EXPOSE 3000
COPY package.json /app
RUN yarn install
COPY . /app
CMD ["yarn", "run", "start"]