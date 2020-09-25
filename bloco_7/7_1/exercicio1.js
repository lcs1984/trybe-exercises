function fatorial (n){
    let resultado = 1;
    if (n<0){
        console.log("digite um numero maior ou igual a zero");
    } else if (n===0) {
        console.log("1");
    } else { 
    for (index=2; index<=n; index+=1){
        resultado = resultado*index;
    }
}
    console.log(resultado);
};

fatorial(5);