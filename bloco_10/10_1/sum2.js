const sum2 = (a, b) => a + b;

module.exports = sum2;

const SumNumbers = (a, b, callback) => {
    setTimeout(() => {
      const result = a + b;
      callback(result);
    }, 500)
  }

  SumNumbers(1,2);