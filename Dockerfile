FROM node:latest       
WORKDIR /app
COPY package*.json ./
COPY . /app
RUN npm install
EXPOSE 8080
CMD [ "node", "server.js"]
