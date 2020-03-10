# HTTP Dumper

Logs the full string representation of the incoming request.

## Running locally

``` shell
$ npm install
$ npm start
```

You can control the port by setting the `PORT` environment variable, default is `8080`.

## Usage

Start up the `http-dumper` and start making requests against it.

``` shell
$ curl -X POST --user 'user:password' 'http://localhost:8080/please?help=me' -d '{"hej": "hopp"}'                                                                                                          15:11:23
Request logged!
```

Results in the following log:

``` shell
HTTP Dumper started @ http://localhost:8080
----- INCOMING REQUEST -----
POST /please?help=me HTTP/1.1
Host: localhost:8080
Authorization: Basic dXNlcjpwYXNzd29yZA==
User-Agent: curl/7.54.0
Accept: */*
Content-Length: 15
Content-Type: application/x-www-form-urlencoded

{"hej": "hopp"}
----------------------------
```
