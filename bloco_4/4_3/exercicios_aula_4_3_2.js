//fazendo o exercicio com array
let n = 5;
let impressao = [];

for (let i = 1; i<=n; i += 1) {
    impressao.push("*");
    console.log(`${impressao}`);
};

//fazendo o exercicio com string
let simbolo = "*";
let input = "";

for (let i = 1; i<=n; i += 1) {
    input = input + simbolo;
    console.log(input);
}