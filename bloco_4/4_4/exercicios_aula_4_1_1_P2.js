function verificaPalindrome(palavra) {
    
    let tamanhoDaPalavra= palavra.length;
    let letrasDaPalavra = palavra.split("");
    let palavraInvertida =[];
    let mensagem;    

    for (let i = tamanhoDaPalavra-1;i >= 0; i -= 1) {
        palavraInvertida.push(letrasDaPalavra[i]);
    };

    let palindromo = false;


    for (let i = 0; i < tamanhoDaPalavra; i += 1) {
        if (letrasDaPalavra[i]===palavraInvertida[i]) {
            palindromo = true;
            mensagem = "é um palíndromo";
        } else {
            palindromo = false;
            mensagem = "não é um palíndromo";
        };
    }

    console.log(mensagem);

}




   // console.log(palavraInvertida);
   // console.log(palindromo);
