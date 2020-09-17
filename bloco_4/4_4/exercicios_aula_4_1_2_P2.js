function maiorValor(arrayDeInteiros) {

let maiorNumero = arrayDeInteiros[0];

for (let i=0; i<=arrayDeInteiros.length; i += 1) {
    if (arrayDeInteiros[i] > maiorNumero){
        maiorNumero = arrayDeInteiros [i];
    } else {

    }
}
console.log(maiorNumero);
return maiorNumero;
}

