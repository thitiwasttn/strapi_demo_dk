FROM node:14.8

ENV DATABASE_NAME='strapi_dk'

ENV DATABASE_HOST=172.17.0.1

ENV TZ=Asia/Bangkok

RUN mkdir /root/app

WORKDIR /root/app

COPY . .

RUN npm install

EXPOSE 1337

RUN chmod a+x /root/app/run.sh

CMD ["/root/app/run.sh"]

# ENTRYPOINT ["npm", "param1", "param2"]
# CMD ['npm' , 'run start']

