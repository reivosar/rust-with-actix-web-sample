FROM node:21.5.0-alpine

WORKDIR /usr/app
COPY . /usr/app

RUN cd /usr/app \
    && npm install \
    && npm run build

EXPOSE 5173

CMD [ "npm", "run", "dev" ]