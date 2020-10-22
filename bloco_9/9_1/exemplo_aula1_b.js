const assert = require('assert');

const pushNumber = (list, number) => list.push(number);

let numbers = [];

setTimeout(() => pushNumber(numbers, 1), 2000);
pushNumber(numbers, 2);
pushNumber(numbers, 3);

setTimeout(() => console.log(numbers),2001);
setTimeout(()=> assert.deepEqual(numbers, [1, 2, 3]),2001); // essa validação falha