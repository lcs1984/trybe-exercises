const fs = require("fs");

const nomeDoArquivo = "meu-arquivo.txt";

fs.readFile(nomeDoArquivo, "utf-8", (err, content) => {
  if (err) {
    console.error(`Não foi possível ler: ${nomeDoArquivo}\n Erro: ${err}`);
    process.exit(1);
  }
  console.log(`Conteudo do arquivo: ${content}`);
});
