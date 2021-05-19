// console.log('readfile exemplo');
const fs = require("fs");

// A função readfile realiza a leitura de um arquivo e, quando termina,
// chama uma função de callback, passando o resultado:

fs.readFile("./arquivo.txt", (err, content) => {
  if (err) {
    console.error(`Erro ao ler o arquivo: ${err.message}`);
    return;
  }

  console.log(
    `Arquivo lido com sucesso com o conteúdo: ${content.toString("utf-8")}`
  );
});
