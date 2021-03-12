FROM node:10

# Maintainer name
LABEL maintainer="Dhiru634@gmail.com"

# Copying angular folder from local directory to Educative directory
COPY . /usr/local/educative/angular

# Installing Angular cli and node modules in angular directory
RUN     npm install -g @angular/cli &&\
        cd /usr/local/educative/angular &&\
        npm i

EXPOSE 3000
