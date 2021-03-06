# Load Test with Locust

This repo has a load test sample using [Locust](https://locust.io).

It has a sample server and the load test script to run against the server.

Server is written in Node.js and Locust script in Python.

## Server

### Node.js

Have [Node.js](https://nodejs.org) (12+) in your machine and type commands below in `server-nodejs/` folder.

```sh
$ npm install
$ node server.js
```

### .NET Core

Have [.NET Core](https://dotnet.microsoft.com/download) (3.1) in your machine and type  commands below in `server-netcore/` folder.

```sh
$ dotnet run
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
