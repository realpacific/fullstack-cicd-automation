FROM node as build

# install chrome for protractor tests
#RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add -
#RUN sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list'
#RUN apt-get update && apt-get install -yq google-chrome-stable

# set working directory
WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH
COPY /ui /app
EXPOSE 4200

# ------- NGNIX ------------
FROM nginx:1.16.0-alpine

# copy artifact build from the 'build environment'
COPY --from=build ui/release/ngrx-demo /usr/share/nginx/html
COPY --from=build ui/ngnix.conf /etc/nginx/conf.d/default.conf

CMD sed -i -e 's/$PORT/'"$PORT"'/g' /etc/nginx/conf.d/default.conf && cat /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'
