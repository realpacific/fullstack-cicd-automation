FROM node:13.7.0-alpine3.11 as build

# install chrome for protractor tests
#RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add -
#RUN sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list'
#RUN apt-get update && apt-get install -yq google-chrome-stable

# set working directory
WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

# Only two bundles are needed for deployment
COPY /ui/release/ /app
COPY /ui/ngnix.conf /app
RUN ls -la

# ------- NGNIX ------------
FROM nginx:1.16.0-alpine

# copy artifact build from the 'build environment'
COPY --from=build app/ngrx-demo /usr/share/nginx/html
COPY --from=build app/ngnix.conf /etc/nginx/conf.d/default.conf

CMD sed -i -e 's/$PORT/'"$PORT"'/g' /etc/nginx/conf.d/default.conf && cat /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'
