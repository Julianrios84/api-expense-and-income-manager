FROM node:lts-alpine3.14
COPY . /app
WORKDIR /app
RUN npm install --only=production
EXPOSE 3000
ENTRYPOINT ["npm", "start"]