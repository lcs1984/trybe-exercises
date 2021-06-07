const express = require('express');
const app = express();

// app.get('/', (_req, res) => {
//     res.send('hello exemplo get');
// });

// app.post('/', (_req, res) => {
//     res.send('hello exemplo post');
// });


app.route('/')
.get((req, res) => {
    res.send('hello get route');
})
.post((req,res) => {
    res.send('hello post route')
})

app.all('/', (_req, res) => {
    res.send('hello exemplo all');
});

app.get('/ping', (req,res, next)=> {
    console.log('hello ping');
    next();
},(req, res) => {
    res.send('hello next ping')
}); 

app.listen(3000, () => {
    console.log('ouvindo na porta 3000');
})