FROM golang:1.9 as builder
RUN mkdir -p /go/src/folder
WORKDIR /go/src/folder
COPY basename/ .
# RUN go get -d
ENV CGO_ENABLED=0 GOOS=linux GOARCH=amd64
RUN ["go", "test"]

