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
};

