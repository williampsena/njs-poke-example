FROM nginx:1.23.2

ADD ./nginx/njs /etc/nginx/njs/
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf