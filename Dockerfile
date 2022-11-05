FROM node:16-alpine
WORKDIR /usr/tunnel-hook
COPY package.json .
RUN npm install
COPY . .
CMD ["node", "./src/main.js"]