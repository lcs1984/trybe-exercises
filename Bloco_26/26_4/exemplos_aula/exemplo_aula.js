const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('vai exemplo');
})

const langs = ['HTTP', 'CSS', 'JS', 'React'];

app.get('/langs', (req, res) => {
    res.send(langs)
});

app.post('/langs', (req, res)=> {
    const { name } = req.body;
    langs.push(name);
    console.log(name)
    res.send(`Linguagem ${name} adicionada com sucesso`);
})

app.listen(3000, ()=> {
    console.log('ouvindo exemplo na porta 3000');
})