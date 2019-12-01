FROM node:latest

COPY . /nestjs-microservices
WORKDIR /nestjs-microservices

RUN npm install
CMD npm start