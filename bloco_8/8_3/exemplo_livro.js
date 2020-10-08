const a = [1, 2, 3, 4];


const sum = a.reduce(function (x, y) {
  return x + y;
});

const sumb = a.reduce((x, y) => x + y, 10);

const mult = a.reduce(function (x, y) {
  return x * y;
});

const multb = a.reduce((x, y) => x * y);
console.log(sum);
console.log(sumb);
console.log(mult);
console.log(multb);