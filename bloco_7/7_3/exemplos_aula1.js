let assert = require('assert');

function add(a, b) {
    return a+b;
}

let expected = add(1,3);
assert.ok (expected === 4, 'um mais tres igual a quatro');