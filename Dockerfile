########### STAGE 1: Build ###########

FROM node:12.16.3-alpine as build

RUN apk --no-cache add git

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# add app
COPY . ./

# install app dependencies
COPY package.json ./
RUN npm install
RUN npm install -g react-scripts@3.4.1
RUN npm run build

####### STAGE 2: Configure WebServer ########

### Setting up NGINX

FROM nginx:alpine

COPY --from=build /app/build /usr/share/nginx/html

## Because of the React Router, the code below will be executed.
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d

##
EXPOSE 80

## Run NGINX
CMD ["nginx", "-g", "daemon off;"]