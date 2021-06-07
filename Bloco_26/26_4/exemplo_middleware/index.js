const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const authMiddleware = require('./auth-middleware');

app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('vamos para outro exemplo');
})

app.get('/aberto', (req, res) => {
    res.status(200).json({message: 'Eu posso ser chamado sem autenticação.'});
})

app.get('/secure', authMiddleware, (req,res) => {
    res.status(200).json({
        message:
      'se esse middleware foi chamado pelo Express, é porque deu tudo certo dentro de `authMiddleware`, e o `next` foi chamado',
    });
});

app.get('/otherSecure', authMiddleware, (req, res) => {
    res.status(200).json({
      message: 'podemos utilizar o mesmo middleware pra quantas rotas quisermos',
    });
  })

app.listen(3000, (req,res) => {
    console.log('Ouvindo na porta 3000');
})