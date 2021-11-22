FROM node:14.8

ENV DATABASE_NAME='strapi_dk'

ENV DATABASE_HOST=172.17.0.1

RUN mkdir /root/app

WORKDIR /root/app

COPY . .

RUN npm install && npm run build

EXPOSE 1337

# ENTRYPOINT ["npm", "param1", "param2"]
# CMD ['npm' , 'run start']

