const randomNumber = () => Math.floor((Math.random()*100));

const isDivisible = (number) => (randomNumber() % number) === 0

console.log(isDivisible(2));

module.exports = {randomNumber, isDivisible}