FROM node:18-alpine AS build

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

RUN npm run build

FROM node:18-alpine

WORKDIR /app

COPY package*.json .

RUN npm install --only=production

COPY --from=build /app/dist  ./dist

ENV PORT=3000

EXPOSE ${PORT}

CMD ["npm","run", "start:prod"]