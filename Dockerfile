FROM python:3.10-alpine

WORKDIR /root

COPY requirements.txt requirements.txt
RUN pip3 install -r requirements.txt

COPY templates ./templates
COPY static ./static
COPY app.py .
COPY data.db .

EXPOSE 5000

CMD gunicorn app:"app" -b 0.0.0.0:5000 --reload  