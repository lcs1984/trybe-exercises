const numbers = [32, 15, 3, 2, -5, 56, 10];

const getSum = (result, number) => {
  console.log(result); // 32 47 50 52 47 103
  return result + number;
};

const sumNumbers = numbers.reduce(getSum);
// const sumNumbersRight = numbers.reduceRight(getSum);
console.log(sumNumbers); // 113

// *** OBSERVE QUE O REDUCE RIGHT SOMA DA ESQUERDA PARA A DIREITA ***