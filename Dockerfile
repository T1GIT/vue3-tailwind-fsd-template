FROM nginx:alpine

COPY nginx.conf /etc/nginx/conf.d/
COPY ./dist /usr/share/nginx/html

EXPOSE 8080

ENTRYPOINT ["nginx", "-g", "daemon off;"]
