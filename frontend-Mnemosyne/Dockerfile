FROM node:22-alpine AS build

WORKDIR /app

COPY package.* .

RUN npm install

COPY . .

EXPOSE 4173

RUN npm run build

CMD ["npm", "run", "preview", "--", "--host", "0.0.0.0"]