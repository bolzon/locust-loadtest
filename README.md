# Load Test with Locust

This repo has a load test sample using [Locust](https://locust.io).

It has a sample server and the load test script to run against the server.

Server is written in Node.js and Locust script in Python.

## Server

Have [Node.js](https://nodejs.org) (12+) in your machine and type command below in `server/` folder.

```sh
$ node server.js
```

## Loadtest

Have [Python](https://python.org) (3.6+) installed in your machine, then install [Locust](https://locust.io) using pip.

```sh
$ pip install locust
```

Type command below in `loadtest/` folder to start Locust server.

```sh
$ locust -f loadtest.py
```
