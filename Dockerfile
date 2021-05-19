FROM node:12-alpine
RUN npm install
COPY server.js .
COPY . .
EXPOSE 8080
CMD [ "node", "server.js" ]
