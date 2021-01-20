//let nomeDeTeste = "Leonardo de Castro Sardinha";
//let nomeDividido = nomeDeTeste.slice(0,1);
//console.log(nomeDividido);

//let nomeDeTeste = "leonardo";
//let nomeDividido = nomeDeTeste.split("");

//let stringDecodifique = "Leonardo de Castro Sardinha";
//let novaString = stringDecodifique;
//let tamanho = stringDecodifique.length

//let arrayDeLetras = stringDecodifique.split("");
//   for (i=0; i< stringDecodifique.length; i += 1) {
//     if (stringDecodifique[i]==="a"){
//       novaString = novaString.replace("a","1");
//     } else if (stringDecodifique[i]==="e") {
//      novaString = novaString.replace("e","2");
//     } else if (stringDecodifique[i]==="i") {
//      novaString = novaString.replace("i","3");
//     } else if (stringDecodifique[i]==="o") {
//      novaString = novaString.replace("o","4");
//     } else if (stringDecodifique[i]==="u") {
//      novaString = novaString.replace("u","5");
////   }
//
 // }

   //console.log(novaString);
   //return novaString;
  //  let recebeString = " Leonardo "
  //  let posicaoDoEspaco = 0;
  //  let palavraCortada;
  //  let arrayParaImprimir = [];
 
  //  for (let i = 0; i < recebeString.length; i += 1) {
  //   if (recebeString[0]===" "){
  //       i += 1; 
  //   } else if (recebeString[recebeString.length-1]===" "){
  //       recebeString = recebeString.slice(0,recebeString.length-1);
  //   } 
    
  //   if (recebeString[i] === " ") {
  //      palavraCortada = recebeString.slice(posicaoDoEspaco, i);
  //      arrayParaImprimir.push(palavraCortada);
  //      posicaoDoEspaco = i;
  //    }
  //  }
  //  palavraCortada = recebeString.slice(posicaoDoEspaco, recebeString.length);
  //  arrayParaImprimir.push(palavraCortada);
 
  //  //return arrayParaImprimir;
  //  console.log(arrayParaImprimir);

  // let nomesDeTecnologia ={
  //   tech:"",
  //   name: ""
  //   };

// seu código aqui
let conjuntoDeNumeros = [1,1,1,9,3,5,2,0,6,7,2];
  // seu código aqui
  let maximo = 0;
  
  if (conjuntoDeNumeros.length!==11){
    console.log("Array com tamanho incorreto");
  } 
  
  for (let i= 0; i<conjuntoDeNumeros.length; i +=1){
    if (conjuntoDeNumeros[i]<0 || conjuntoDeNumeros>9){
      console.log("não é possível gerar um número de telefone com esses valores");
    }
  }

    for (let i = 0; i<conjuntoDeNumeros.length; i +=1){
      for (let j = 0; j<conjuntoDeNumeros.length; j +=1){
        if (conjuntoDeNumeros[i]===conjuntoDeNumeros[j]){
          maximo += 1; 
        }
      }
    }    

   