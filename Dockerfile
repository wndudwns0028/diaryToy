FROM node:16.20.1-alpine

WORKDIR /app

COPY . .

# RUN yum install -y nodejs

RUN npm install

EXPOSE 3000

CMD ["npm", "run", "dev"]
