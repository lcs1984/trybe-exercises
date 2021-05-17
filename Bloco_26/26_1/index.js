const {femaleRandom, maleRandom, allRandom} = require('dog-names');
const readline = require('readline-sync');

const name = readline.question('Qual é seu nome ?');
const age = readline.questionInt('Qual sua idade? ');

console.log(`Hello, ${name}! You are ${age} years old`);
// console.log(femaleRandom(), maleRandom());
// const dogNames = require('dog-names');

// console.log(dogNames.femaleRandom());

// console.log("Hello World");