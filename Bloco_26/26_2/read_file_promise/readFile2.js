const fs = require("fs");

function readFilePromise(fileName) {
  const promise = new Promise((resolve, reject) => {
    fs.readFile(fileName, (err, content) => {
      if (err) reject(err);
      resolve(content);
    });
  });
  return promise;
}

readFilePromise("./file1.txt").then((result) => {
  console.log(`Lido arquivo 1 com ${result.byteLength} byes`);
  return readFilePromise('file2.txt');
}).then((result) => {
    console.log(`Lido arquivo 2 com ${result.byteLength} byes`);
    return readFilePromise('file3.txt');
}).then((content)=> {
    console.log(`Lido arquivo 3 com ${content.byteLength} bytes`)
}).catch((err)=> {
    console.log(`Erro encontrado: ${err.messagae}`)
})
