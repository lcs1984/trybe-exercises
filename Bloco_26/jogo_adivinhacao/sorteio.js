const readline = require("readline-sync");

// const randomNumber = Math.ceil(Math.random() * 10, 0);
// console.log(randomNumber);

// console.log("Sorteio");

function adivinha() {
  const numero_escolhido = readline.questionInt(
    "Escolha um número inteiro entre 0 e 10: "
  );
  const numero_aleatorio = Math.ceil(Math.random() * 10, 0);
  if (numero_escolhido === numero_aleatorio) {
    return console.log("Parabéns, número correto!");
  } else {
    return console.log(
      `Opa, não foi dessa vez. O número era ${numero_aleatorio}"`
    );
  }
}

function jogar() {
  adivinha();
  const novamente = readline.question("Deseja jogar novamente? (s/n)");
  if (novamente === "n") {
    return console.log('Ok, até a próxima');
  } else {
      jogar();
  }
}

jogar();