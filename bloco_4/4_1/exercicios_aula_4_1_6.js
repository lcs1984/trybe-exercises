let peca_xadrez = "rainha";

switch(peca_xadrez.toLowerCase()){
    case "cavalo":
        console.log("O cavalo move em L");
        break;
    case "rei":
        console.log("O rei move em todas as direções uma casa por vez");
        break;
    case "bispo":
        console.log("o bispo move na diagonal");
        break;
    case "rainha":
        console.log("a rainha move diagonal e horizontal");
        break;
    case "torre":
        console.log("a torre move na horizontal");
        break;
    case "peão":
        console.log("apenas uma casa para frente, mas o primeiro movimento pode ser de duas casas");
        break;
    default:
        console.log("Erro, peça inválida");
        break;
}
