const readline = require("readline-sync");

function avalia_valores() {
  const promise = new Promise((resolve, reject) => {
    const a = readline.question("digite um valor inteiro para a: ");
    const b = readline.question("digite um valor inteiro para b: ");
    const c = readline.question("digite um valor inteiro para c: ");

    if (isNaN(a) || isNaN(b) || isNaN(c))
      reject(new Error("Informe apenas números"));
    resultado = (a + b) * c;
    if (resultado < 50) reject(new Error("Valor muito baixo"));
    resolve(resultado);
  });
  return promise;
}

avalia_valores()
  .then((result) => {
    console.log(`O valor encontrado foi ${result}`);
  })
  .catch((err) => {
    console.error(`Houve o seguinte erro: ${err.message}`);
  });


//   function doMath(a, b, c) {
//   return new Promise((resolve, reject) => {
//     /* Criamos um array com os tipos dos parâmetros */
//     const paramTypes = [a, b, c].map((param) => typeof param);

//     /* Caso o tipo de algum parâmetro não seja `number`, rejeitamos a Promise */
//     if (paramTypes.some((paramType) => paramType !== number)) {
//       return reject(new Error('Informe apenas números'));
//     }

//     const result = (a + b) * c;

// if (result < 50) {
//     return reject(new Error('Valor muito baixo'));
//   }

//   resolve(result);
//   });
// }