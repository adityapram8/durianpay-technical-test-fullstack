# base image
FROM node:24.14.0-alpine

# Install pnpm
RUN npm install -g pnpm

# Setting working directory.
WORKDIR /usr/src/app

# Installing dependencies
COPY package.json pnpm-lock.yaml ./
RUN pnpm install

# Copying source files
COPY . .
COPY .env.example .env
EXPOSE 3000

# Building app
RUN pnpm run build

# Running the app
CMD [ "pnpm", "run", "start" ]