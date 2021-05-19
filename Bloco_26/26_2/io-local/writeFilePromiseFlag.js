const fs = require('fs/promises');

// fs.writeFile('meu-arquivo.txt', 'Eu estive aqui : eyes', {flag: 'wx'})
// .then(()=> {
//     console.log("Arquivo Salvo");
// }).catch((err) => {
//     console.error(err.message);
// })

async function main() {
    try {
      await fs.writeFile("./meu-arquivo2.txt", "Meu textao 2", {flag: 'wx'});
      console.log("Arquivo escrito com sucesso");
    } catch (err) {
      console.error(`Erro ao escrever no arquivo: ${err.message}`);
    }
  }
  
  main();
  