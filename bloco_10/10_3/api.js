const fetch = require("node-fetch");

function fetchURL() {
    return fetch('https://ghibliapi.herokuapp.com/species').then(response =>
      response
        .json()
        .then(json =>
          response.ok ? Promise.resolve(json) : Promise.reject(json)
        )
    );
  }

   async function fetchReturn () { await fetchURL()};
   const retorno = fetchReturn();

  console.log(retorno);
  module.exports = { fetchURL };
