// const assert = require('assert');

const arrays = [['1', '2', '3'], [true], [4, 5, 6]];

// function flatten() {
//   return arrays.reduce((previousValue, nextValue) => {
//     nextValue.map((valor)=> {previousValue.push(valor);
//   });
//   return previousValue;
// }, []);
// }
function exemplo() {
  return arrays.reduce((valor1, valor2) => {
    valor1 + valor2;
  });
}
// Por que dá undefined???
console.log(exemplo());

function flatten() {
  return arrays.reduce((previousValue, nextValue) => {
    nextValue.map((valor) => {
      previousValue.push(valor);
    });
    return previousValue;
  }, []);
}

// assert.deepEqual(flatten(), ["1", "2", "3", true, 4, 5, 6]);
console.log(flatten());
