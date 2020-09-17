let notaPorcentagem = 70;

if (notaPorcentagem<0 || notaPorcentagem>100){
    console.log("Erro ao inserir nota");
} else if (notaPorcentagem>=90){
    console.log("A nota obtida é A");
} else if (notaPorcentagem>=80){
    console.log("A nota obtida é B");
} else if (notaPorcentagem>=70){
    console.log("A nota obtida é C");
} else if (notaPorcentagem>=60){
    console.log("A nota obtida é D");
} else if (notaPorcentagem>=50){
    console.log("A nota obtida é E");
} else if (notaPorcentagem<50){
    console.log("A nota obtida é F");
}
