const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs/promises');
const rescue = require('express-rescue');
const app = express();

app.use(bodyParser.json());

app.get('/', (_req, res) => {
    res.send('Iniciando...')
})

app.get('/:fileName', rescue(async(req, res) => {
    const file = await fs.readFile(`./${req.params.fileName}`);
    res.status(200).send(file.toString('utf-8'))
}));

app.use((err, req, res, next) => {
    res.status(500).json({error: `Erro ${err.message}`})
})

app.listen(3000, ()=> {
    console.log("Estamos ouvindo 3000")
})