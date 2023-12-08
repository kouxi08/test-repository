FROM node:18.14.1-slim as node
WORKDIR /usr/src/app
COPY . /usr/src/app
EXPOSE 4321
RUN npm install
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
