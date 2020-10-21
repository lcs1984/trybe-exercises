// const numbers = [11, 24, 39, 47, 50, 62, 75, 81, 96, 100];
// let firstMultipleOf5;
// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] % 5 === 0) {
//     firstMultipleOf5 = numbers[i];
//     break;
//   }
// }

// console.log(firstMultipleOf5);

//*** DIFERENTEMENTE DA FOREACH A FIND RETORNA UM VALOR  */
//** A FUNÇÃO FOREACH APENAS PERCORRE O ARRAY EXECUTANDO UM DETERMINADO COMANDO OU FUNÇÃO */
const numbers = [11, 24, 39, 47, 50, 62, 75, 81, 96, 100];
const letras = ["E", "D", "C", "B", "A"]
const firstMultipleOf5 = numbers.find((number) => number % 5 === 0);

console.log(firstMultipleOf5);

numbers.find((number) => number >= 50);
console.log(numbers.filter((number)=> number>=50));
numbers.forEach((number)=>console.log(number));
// A funçao Sort pode ser com parâmetro ou não....sem paramentros funciona só para strings
console.log(numbers.sort((maior, menor)=>maior-menor));
console.log(letras.sort());

