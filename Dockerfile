FROM node:alpine

WORKDIR /app

COPY . .

# RUN yum install -y nodejs

RUN npm install

EXPOSE 3000

CMD ["npm", "run", "build"]
