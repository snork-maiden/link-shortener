FROM node:18-alpine
WORKDIR /opt/app
COPY ./ /opt/app
RUN npm install -g @angular/cli && npm install