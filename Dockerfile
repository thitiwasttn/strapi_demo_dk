FROM node:14.8

ENV DATABASE_NAME='strapi_dk_personal'

ENV DATABASE_HOST=61.19.242.56

RUN mkdir /root/app

WORKDIR /root/app

COPY . .

RUN npm install && npm build

CMD ['npm' , 'run ','start']

EXPOSE 1337
