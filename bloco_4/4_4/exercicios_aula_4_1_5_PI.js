let info = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
    recorrente: "Sim"
  };

let info2 = {
    personagem: "Tio Patinhas",
    origem: "PChristmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: "O último MacPatinhas",
    recorrente: "Sim"
};


//    console.log(`${info.recorrente} e ${info2.recorrente}`);

    for (let key in info) {
        if (info[key] === info2[key]){
            console.log("Ambos são sim");
        } else
            console.log(info[key] + " e " + info2[key]);
    }