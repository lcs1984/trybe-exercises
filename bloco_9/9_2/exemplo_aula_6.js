const fetch = require('node-fetch');

function verifiedFetch(url) {
  return new Promise((resolve, reject) => {
    if (url === 'https://api.chucknorris.io/jokes/random?category=dev') {
      fetch(url)
        .then((r) => r.json())
        .then((r) => resolve(r.value));
    } else {
      reject(new Error('endpoint não existe'));
    }
  });
}

function sendJokeToFriend(name) {
  const message = verifiedFetch('https://api.chucknorris.io/jokes/random?category=dev')
    .then((joke) => `Oi ${name}, ouve essa: ${joke}`)
    .catch((err) => err);
  console.log(message);
}

sendJokeToFriend("Anna")

/* Como você viu, ela esta em pending, mesmo sendo resolvida 
imediatamente. Isso aconteceu pois, mesmo resolvendo na hora, 
a promise vai para sua área e sai da fila. Quando ela retorna,
 mesmo que de imediato, ela volta pro final da fila e o console.log 
 está na frente, sendo executado primeiro. Para resolver esse 
 problema existem 2 maneiras. A primeira é usar o fluxo da promise 
 e colocar o console.log dentro do .then(). Essa solução e ótima, 
 mas pode ficar dificil de se manter e ler a medida que o número de 
 passos aumenta e a medida que cada passo fica mais complexo também, 
 assim, surgiu a terceira digievolução evolução das promises,
  o async e o await! */