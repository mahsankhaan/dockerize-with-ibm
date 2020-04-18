FROM node:latest       
WORKDIR /app
COPY package*.json ./
COPY . /app
RUN npm install
EXPOSE 3300
CMD [ "node", "app.js"]
