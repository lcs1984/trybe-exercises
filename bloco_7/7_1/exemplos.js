"use strict";

function imprimeLeonardo() {
  let names1 = "leonardo";
  // let name = "sardinha"

  return names1;
}
// Aqui se tentarmos definir a variável 2x, teremos um erro

console.log(`Oi ${imprimeLeonardo()}`);
console.log(`Oi ${`${imprimeLeonardo()}`}`);

// Agora vamos ver Expression Scope

function foo(str) {
  let names2 = "foo";

  console.log(str);
}

function bar() {
  let names2 = "bar";

  foo(`Hello ${names2}!`);
}

let names2 = "global";

bar();
foo("leonardo");

//   Agora vamos falar de Tagget Template Literals

("use strict");

// const moment = require('moment');

let name = "Jonas";

function tag(strings, ...values) {
  console.log(strings[0]);
  console.log(strings[1]);
  console.log(strings[2]);

  console.log(values[0]);
  console.log(values[1]);

  return `Whatever ${values[0]}!`;
}

// console.log(tag`Hello, my name is ${name} and I'm ${moment().diff('1994-03-08', 'years')} years old`);

// ES6: Create Strings using Template Literals

const person = {
  name: "Zodiac Hasbro",
  age: 56,
};

let x = 10;
let y = 5;

const greeting = `Hello, my name is ${person.name}!
I am ${person.age} years old and I haver USD ${x*y}`;

console.log(greeting);

// for (let index =0; index <3; index +=1) {
//     let olElement = document.querySelector(".lista");
//     let texto =["no-var", "var-on-top", "linebreak"]
//     let itemParaAdicionar = document.createElement('li');
//     itemParaAdicionar.classList.add("text-waring");
//     console.log(`itemParaAdicionar ${texto[index]}`);
//     console.log(`<li class="text-warning>${texto[index]}</li>`)
// }

// Aula ao vivo
// Verificando vazamento de escopo

function ola (nome) {
    return `ola" ${nome}`
}

ola("leonardo");
console.log(ola("leonardo"));