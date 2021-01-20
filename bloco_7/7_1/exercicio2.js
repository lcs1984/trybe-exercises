// let frase = "Antônio foi no banheiro e não sabemos o que aconteceu";
let longestWord = (frase) => {
frase = frase.split(" ");
let maiorPalavra = "";
// console.log(frase.length);
for (index = 0; index<frase.length; index += 1) {
    // console.log(frase[index].length); 
    if (frase[index].length>=maiorPalavra.length){
        maiorPalavra=frase[index];
    }
}
console.log(maiorPalavra);
}


longestWord("Antônio foi no banheiro e não sabemos o que aconteceu");
