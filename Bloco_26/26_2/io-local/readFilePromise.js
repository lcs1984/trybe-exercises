const fs = require("fs/promises");

const nomeDoArquivo = "meu-arquivo.txt";

fs.readFile('./file1.txt', "utf-8")
  .then((data) => {
    console.log(`Conteudo do arquivo: ${data}`);
    fs.readFile('./file2.txt', "utf-8").then((data2)=> {
      console.log(`conteudo do arquivo2 ${data2} `)
    })
  })
  .catch((err) => {
    console.error(
      `Não foi possível ler o arquivo: ${nomeDoArquivo}\n Erro: ${err}`
    );
    process.exit(1);
  });

