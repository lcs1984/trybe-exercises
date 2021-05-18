const readline = require("readline-sync");

function fatorial(x) {
  if (x == 0) {
    return 1;
  } else if(x<0) {
      return console.log('digite um número inteiro maior ou igual a zero');
  } 
  else {
    return x * fatorial(x - 1);
  }
}

function roda_fatorial() {
    const x = readline.questionInt('Digite um número inteiro: ');
    const resultado = fatorial(x);
    return resultado;
}

console.log(roda_fatorial());