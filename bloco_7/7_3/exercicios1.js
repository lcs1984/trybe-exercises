const assert = require("assert");

const soma = (a, b) => {
  if (a === 4 && b === 5) {
    return 9;
  } else if (a === 0 && b === 0) {
    return 0;
  } else if (typeof a == "string" || typeof b == "string") {
     throw Error("parameters must be numbers");
  } else {
    return a + b;
  }
};

// soma(4,"5");

assert.throws(()=>{soma(4,"5")}, "Erro1");
assert.strictEqual(typeof soma, "function", "dever ser uma função");
assert.deepStrictEqual(soma(4, 5), 9, "o resultado deve ser 9");
