const fatorial= (n) =>{
  let resultado = 1;
  if (n < 0) {
    console.log("digite um numero maior ou igual a zero");
  } else if (n === 0) {
    console.log("1");
  } else {
    for (index = 2; index <= n; index += 1) {
      resultado = resultado * index;
    }
  }
  console.log(resultado);
}

fatorial(5);

const fatorial2 = y =>{
  if (y<=1){
      return 1;
  }else 
    return y * fatorial2(y - 1);
};

fatorial2(5);

const somatorio= x =>{
 if(x<=1)
  return 1;
 else
  return x + somatorio(x-1) ;
};
