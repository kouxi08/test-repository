FROM node:18.14.1-slim as node
WORKDIR /usr/src/app
COPY . /usr/src/app
RUN npm install
# RUN npm run build


# FROM nginx:alpine AS runtime
# COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
# COPY --from=node /usr/src/app/dist /usr/share/nginx/html
# EXPOSE 4321