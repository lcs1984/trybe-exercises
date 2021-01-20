const fetchExercise2 = () => {
  const myPromise = new Promise((resolve, reject) => {
    let randonArray = [];
    for (let index = 1; index <= 10; index += 1) {
      let number = Math.ceil(Math.random() * 50);
      randonArray.push(number * number);
    }
    const sum = randonArray.reduce((first, second) => first + second);

    sum < 8000 ? resolve(sum) : reject(sum);
  })
    .then((sum) => [2, 3, 5, 10].map((number) => sum / number))
    .then(resultado=>resultado.reduce((number,acc)=>number+acc))
    .then(foi=>console.log(foi))
    .catch((negativa) =>
      console.log(`Deu Ruim: o número ${negativa} é maior que 8000`)
    );
};

fetchExercise2();
