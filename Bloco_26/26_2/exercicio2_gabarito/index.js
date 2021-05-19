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

 function callDoMath() {
    /* Criamos um novo array de 3 posições
     * e utilizamos o `map` para gerar um número aleatório
     * para cada posição do Array
     */
    const randomNumbers = Array.from({ length: 3 }).map(getRandomNumber);
    tree_numbers(...randomNumbers)
    .then(result => console.log(result))
    .catch(err => console.error(err.message))
  }

callDoMath();