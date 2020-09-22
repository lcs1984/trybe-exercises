let listaDeEstadosDoBrasil = [
  "AC",
  "AL",
  "AP",
  "AM",
  "BA",
  "CE",
  "ES",
  "GO",
  "MA",
  "MT",
  "MS",
  "MG",
  "PA",
  "PB",
  "PR",
  "PE",
  "PI",
  "RJ",
  "RN",
  "RS",
  "RO",
  "RR",
  "SC",
  "SP",
  "SE",
  "TO",
  "DF",
];
console.log(listaDeEstadosDoBrasil.length);

let estadosDoBrasil = document.getElementById("estados-do-brasil");
for (index = 0; index < listaDeEstadosDoBrasil.length; index += 1) {
  let estado = listaDeEstadosDoBrasil[index];
  let optionList = document.createElement("option");
  optionList.innerText = estado;
  estadosDoBrasil.appendChild(optionList);
}

function verificaFormatoDaData() {
  let data = document.querySelector("#data-de-inicio").value;
  data = data.split("/");
  if (data[0]<0 || data[0] > 31){
    let erroDia = "O dia precisa estar entre 0 e 31";
    console.log(erroDia)
  } else if (data[1]<0 || data[1]>12) {
    let erroMes = "O mês precisa estar entre 0 e 12";
    console.log(erroMes);
  } else if (data [2]<0){
    let erroAno = "O ano precia ser positivo";
    console.log(erroAno);
  }
  console.log(data[0]);
  console.log(data[1]);
  console.log(data[2]);
}

let enviar = document.querySelector(".form-do-exercicio");

enviar.addEventListener("submit", function(event){
  event.preventDefault();
  verificaFormatoDaData();
});
