//fazendo o exercício com array
let n = 5;
let impressao = [];

for (let i=1; i<=n; i += 1) {
    impressao.push("*");
};
for (let i=1; i<=n; i += 1) {
   console.log(`${impressao}`); 
};

//fazendo o exercício com string
let simbolo = "*";
let input = "";

for (let i=1; i<=n; i += 1) {
    input = input + simbolo;
};
for (let i=1; i <= n; i += 1) {
    console.log(input);
};