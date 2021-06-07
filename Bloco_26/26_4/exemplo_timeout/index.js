const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.post('/hello', (req, res) => {
  // req.body agora está disponível
  res.status(200)
    .json({
      greeting: `Hello, ${req.body.name}!`
    });
});

const timeMiddleware = (req, res, next) => {
    req.startTime = Date.now();
    next();
}

app.use(timeMiddleware);

app.get('/tempo', (req, res) => {
    const endTime = Date.now() - req.startTime;
    res.status(200).json({
        message: `essa request foi processada em ${endTime} milissegundos`
    });
});

app.listen(3000, ()=> {
    console.log('Ouvindo na porta 3000');
});