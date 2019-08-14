# base image
FROM node:12.2.0-alpine

# set working directory
WORKDIR /app
ADD . /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

RUN npm install --silent
RUN npm install react-scripts@3.0.1 -g --silent

EXPOSE 3000

# start app
CMD ["npm", "start"]