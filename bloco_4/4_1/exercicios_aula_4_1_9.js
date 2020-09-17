let a = 0;
let b = 2;
let c = 4;

let isOdd=false;

if (a % 2 != 0 || b % 2 != 0 || c % 2 != 0){
    isOdd= true;
    console.log("Ao menos uma é ímpar");
} else{
    isOdd = false;
    console.log("Nenhuma é ímpar");
}