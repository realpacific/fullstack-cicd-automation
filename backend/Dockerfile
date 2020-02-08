FROM python:3.7.1

LABEL author="Prashant Barahi"
LABEL email="prashantbarahi@gmail.com"

ENV FLASK_ENV "development"
ENV FLASK_DEBUG True

RUN mkdir /app

COPY ./backend /app/

RUN cd app && python3 -m venv venv \
    && chmod -R a=rwx ./venv \
    && ./venv/bin/activate \
    && pip3 install -r requirements.txt \
    && pip3 install requests

EXPOSE 5000

CMD cd app && python3 app.py
