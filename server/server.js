const express = require('express');
const app = express();
const port = 3000;

const MIN_LOGIN_RESPONSE = 150;
const MAX_LOGIN_RESPONSE = 700;

const getRandomTime = (min, max) => Math.floor(Math.random() * (max - min) + min);

app.get('/', (req, res) => {
  res.send('It is my home page!');
});

app.get('/login', (req, res) => {
  const responseTime = getRandomTime(MIN_LOGIN_RESPONSE, MAX_LOGIN_RESPONSE);
  const responseMsg = `It is my login page! Took ${responseTime}ms to send response.`;
  setTimeout(() => res.send(responseMsg), responseTime);
});

app.listen(port, () => console.log(`Server listening on port ${port}`));
