function tree_numbers(a, b, c) {
    const promise = new Promise((resolve, reject) => {
      const arrayOfNumbers = [a, b, c];
      const arrayType = arrayOfNumbers.map((number) => typeof number);
      if (arrayType.some((value) => value != "number"))
        reject(new Error("digite apenas numeros"));
      const mathResult = (a + b) * c;
      if (mathResult < 50) reject(new Error("Valor muito pequeno"));
      resolve(mathResult);
    });
    return promise;
  }

  function getRandomNumber() {
      return Math.floor(Math.random() * 100 + 1);
  }

  async function tree_numbers(a,b,c) {
      const arrayOfNumbers = await [a, b, c];
      const arrayType = await arrayOfNumbers.map((number) => typeof number);
      
  }