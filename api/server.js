const express = require('express');

const app = express();
const port = 4000;

app.use((req, res, next) => {
  console.log('Hi I\'m middleware:', Date.now());
  console.log(req.headers);
  if (!req.headers.authorization) {
    res.statusCode = 401;
    res.send({
      message: 'Not Authorized',
    });
    return;
  }

  if (req.headers.authorization !== "Secret Password") {
    res.statusCode = 403;
    res.send({
      message: 'Forbidden',
    });
    return;
  }
  next();
});

app.get('/', (req, res) => {
  console.log('request on path: "/"');
  res.send({
    message: 'Hello World',
  });
});

app.get('/shop', async (req, res) => {
  console.log('request on path: "/shop"');
  res.send({
    message: 'Hello shop',
  });
});

app.listen(port, () => console.log(`listening on http://localhost:${port}`));
