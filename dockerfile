FROM node:8

WORKDIR /home/node/app
RUN npm install

EXPOSE 3000

CMD node app/index.js