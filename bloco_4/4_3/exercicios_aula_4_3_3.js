let n = 5;
let simbolo = "*";
let input="";
let impressao;

for (let i = 1; i <= n; i += 1) {
    input="";
    for (let j=1; j<=n-i; j += 1){
        input+=" ";
    }
    impressao=input+simbolo;
    console.log(impressao);
    simbolo=simbolo+"*";
};
