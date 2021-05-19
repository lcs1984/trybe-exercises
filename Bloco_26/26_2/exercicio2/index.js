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

// tree_numbers(1, 2, 200)
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err.message));

function random_tree_numbers() {
  const a = Math.floor(Math.random() * 100 + 1);
  const b = Math.floor(Math.random() * 100 + 1);
  const c = Math.floor(Math.random() * 100 + 1);

  const randomArray = [a,b,c]
  tree_numbers(...randomArray)
    .then((result) => console.log(result))
    .catch((err) => console.log(err.message));
}

random_tree_numbers();
