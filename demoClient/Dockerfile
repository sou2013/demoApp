# use nginx as web server to serve up the Angular app.  It also serves as a reverse proxy
# and routes requests to the REST endpoints provided by the backend app (a simple API Gateway)
FROM nginx:1.17.1-alpine

# copy Angular app to the image
COPY dist/demoClient /usr/share/nginx/html

# copy config file containing the routing info
COPY default.conf /etc/nginx/conf.d/

CMD ["nginx", "-g", "daemon off;"]