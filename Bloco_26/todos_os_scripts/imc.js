const readline = require("readline-sync");

const peso_80KG = 80;
const altura_1M_73 = 1.73;

const calcula_imc = () => {
  const peso = readline.questionFloat("Digite o valor do peso: ");
  const altura = readline.questionFloat("digite o valor da altura com .:");
  console.log("Peso: %s, altura: %s", peso, altura);
  const imc = (peso / (Math.pow(altura, 2))).toFixed(2);
  console.log("IMC: %s", imc);
};

calcula_imc();
