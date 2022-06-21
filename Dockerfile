FROM node:18.4-alpine

ENV NODE_ENV development

WORKDIR /app

COPY package-lock.json ./
COPY package.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]

