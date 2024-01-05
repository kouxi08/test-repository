FROM node:20.5.0-slim as node
WORKDIR /usr/src/app
COPY . /usr/src/app
RUN npm install
RUN npm run build
ENV HOST=0.0.0.0
ENV PORT=4321
EXPOSE 4321
CMD node ./dist/server/entry.mjs

# FROM nginx:alpine AS runtime
# COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
# COPY --from=node /usr/src/app/dist /usr/share/nginx/html
# EXPOSE 4321
