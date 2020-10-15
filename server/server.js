const express = require('express');
const app = express();
const port = 3000;

// time taken in ms to login page send a response
const MIN_LOGIN_RESPONSE = 150;
const MAX_LOGIN_RESPONSE = 500;

// time taken in ms to products page send a response
const MIN_PRODUCTS_RESPONSE = 400;
const MAX_PRODUCTS_RESPONSE = 1300;

///////////////////////////////////////

const getRandomTime = (min, max) => Math.floor(Math.random() * (max - min) + min);

app.get('/', (req, res) => {
  res.send('It is the home page!');
});

app.post('/login', (req, res) => {
  const responseTime = getRandomTime(MIN_LOGIN_RESPONSE, MAX_LOGIN_RESPONSE);
  const responseMsg = `It is the login page! Took ${responseTime}ms to send response.`;
  setTimeout(() => res.send(responseMsg), responseTime);
});

app.get('/products', (req, res) => {
  const responseTime = getRandomTime(MIN_PRODUCTS_RESPONSE, MAX_PRODUCTS_RESPONSE);
  const responseMsg = `It is the products page! Took ${responseTime}ms to send response.`;
  setTimeout(() => res.send(responseMsg), responseTime);
});

app.listen(port, () => console.log(`Server listening on port ${port}`));
