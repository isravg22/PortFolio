FROM node:20.6 AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
RUN npm rebuild sharp
COPY . .
RUN npm run build

FROM node:20.6 AS production
WORKDIR /app
COPY --from=build /app ./
EXPOSE 3000
CMD ["npm", "start"]
