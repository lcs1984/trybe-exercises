const fs = require("fs/promises");

async function main() {
  try {
    await fs.writeFile("./meu-arquivo.txt", "Meu textao 2");
    console.log("Arquivo escrito com sucesso");
  } catch (err) {
    console.error(`Erro ao escrever no arquivo: ${err.message}`);
  }
}

main();
