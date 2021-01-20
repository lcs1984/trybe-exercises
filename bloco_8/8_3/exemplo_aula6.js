const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

// Just listing an array of even numbers with filter HOF
const returnEvenNumber = (arrayForFilter) =>
  arrayForFilter.filter((number) => number % 2 === 0);

console.log(returnEvenNumber(numbers));

console.log(numbers.filter((number) => number % 2 === 0));

// Sum even numbers with filter and reduce HOF

const returnSumOfEvenNumbers = (arrayForFilter) =>
  arrayForFilter
    .filter((number) => number % 2 === 0)
    .reduce((result, number) => result + number);

console.log(returnSumOfEvenNumbers(numbers));

// Sum even number using just reduce HOF

const getSumOfEvenNumbers = (sumEven, number) =>
  number % 2 === 0 ? sumEven + number : sumEven;

  console.log(numbers.reduce(getSumOfEvenNumbers))