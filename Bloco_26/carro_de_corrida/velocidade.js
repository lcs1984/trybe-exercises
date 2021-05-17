const readline = require('readline-sync');

const velocidade = () => {
    const distancia = readline.questionInt('qual a distancia em metros? ');
    const tempo = readline.questionInt('qual o tempo em segundos? ');
    const velocidade_media = (distancia/tempo).toFixed(2);
    console.log(`velocidade média: ${velocidade_media}`);
}

velocidade();

// console.log("velocidade");

// Outra forma
// const readline = require('readline-sync');

// const distancia = readline.questionInt('Distância percorrida (m)');
// const tempo = readline.questionInt('Tempo gasto (s)');

// const velocidadeMedia = (distancia / tempo).toFixed(2);

// console.log(`Velocidade média: ${velocidadeMedia} m/s`);