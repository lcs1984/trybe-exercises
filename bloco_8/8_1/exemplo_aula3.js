const arrayDeTeste = [-1, 10, 5]
const arrayOfValues = ['josé', 50, 0.25, { comida: 'Chocolate' }];
arrayOfValues.forEach((element) => {
  console.log('Cada elemento do array:', element);
});

// REPARE QUE AQUI A FOREACH NAO RETORNOU NADA, SÓ EXECUTOU O QUE COLOCOU DENTRO

// O some recebe um parâmetro e retorna somente true or false, igual ao every
console.log(arrayOfValues.some((valor)=>valor>=0));
console.log(arrayOfValues.every((valor)=>valor>=0));

console.log(arrayDeTeste.every((valor)=>valor>=-1));
console.log(arrayDeTeste.every((valor)=>valor>=0));
console.log(arrayDeTeste.some((valor)=>valor<=0));
