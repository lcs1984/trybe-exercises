let n = 9;
let mediana;
let impressao;
let simbolo = "*"
if (n%2===0){
    n = n-1
}

mediana = (n+1)/2;

for (let j=1; j<= mediana; j += 1) {
    let input = "";
    for (let i = 1; i <= n; i += 1) {
       if (i<mediana-j+1){
           input += " ";
       } else if (i>=mediana-j+1 && i<=mediana+j-1) {
           input = input + simbolo;
       } else {
           input += " ";
       }
    }
    console.log(input);
}

