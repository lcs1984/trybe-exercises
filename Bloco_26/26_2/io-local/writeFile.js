const fs = require("fs/promises");

fs.writeFile("./meu-arquivo.txt", "Meu textao")
  .then(() => {
    console.log("Arquivo escrito com sucesso");
  })
  .catch((err) => {
    console.error(`Não foi possível escrever: ${err.message}`);
  });
