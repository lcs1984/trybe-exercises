const fs = require("fs/promises");

// Assim executamos o código somente quando a leitura dos 3 arquivos terminarem

Promise.all([
  fs.readFile("./file1.txt"),
  fs.readFile("./file2.txt"),
  fs.readFile("./file3.txt"),
])
  .then(([file1, file2, file3]) => {
    const fileSizeSum = file1.byteLength + file2.byteLength + file3.byteLength;
    console.log(`Lidos 3 arquivos totalizando ${fileSizeSum}`);
  })
  .catch((err) => {
    console.error(`Erro ao ler arquivos: ${err.message}`);
  });

