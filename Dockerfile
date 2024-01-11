FROM node:20.5.0-slim as node
WORKDIR /usr/src/app
COPY . /usr/src/app


ARG domain
ARG apikey
ARG endpoint
ARG port
ARG usessl
ARG accesskey
ARG secretkey

ENV MICROCMS_SERVICE_DOMAIN=${domain}
ENV MICROCMS_API_KEY=${apikey}
ENV ENDPOINT=${endpoint}
ENV MINIO_PORT=${port}
ENV USE_SSL=false
ENV ACCESS_KEY=${accesskey}
ENV SECRET_ACCESS_KEY=${secretkey}

RUN npm install
RUN npm run build
ENV HOST=0.0.0.0
ENV PORT=4321
EXPOSE 4321
CMD node ./dist/server/entry.mjs

