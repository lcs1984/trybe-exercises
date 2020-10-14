// const numbers = [11, 24, 39, 47, 50, 62, 75, 81, 96, 100];
// let firstMultipleOf5;
// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] % 5 === 0) {
//     firstMultipleOf5 = numbers[i];
//     break;
//   }
// }

// console.log(firstMultipleOf5);

const numbers = [11, 24, 39, 47, 50, 62, 75, 81, 96, 100];
const firstMultipleOf5 = numbers.find((number) => number % 5 === 0);

console.log(firstMultipleOf5);

numbers.find((number) => number >= 50);
console.log(numbers.filter((number)=> number>=50));
numbers.forEach((number)=>console.log(number));


