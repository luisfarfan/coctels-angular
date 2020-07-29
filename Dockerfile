FROM node:14.4.0 as builder

WORKDIR /app

COPY . ./

RUN npm install
RUN npm run build

FROM nginx:alpine

COPY --from=builder /app/dist/coctels-angular/ /usr/share/nginx/html

COPY ./nginx.conf /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]
