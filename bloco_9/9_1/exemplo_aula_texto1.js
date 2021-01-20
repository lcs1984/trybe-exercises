console.log("Plant maize");

//setTimeout ajustou em 3 segundos, o sistema vai em frente...
setTimeout(function () {
  console.log("Water plant");
}, 3000);

console.log("Add fertilizer");

// As funções são objetos de primeira classe:
//(1) podem se atribuídas como variáveis e tratadas como valor
//(2) ter outras fuções nelas
//(3) retorna outras funções para serem chamadas mais tarde

// Funções de Retorno de Chamada:
//Quando uma função simplesmente aceita outra função como argumento, 
//essa função contida é conhecida como função de retorno de chamada. 
//Usar funções de retorno de chamada é um conceito básico de programação 
//funcional e você pode encontrá-las na maioria dos códigos JavaScript; 
// tanto em funções simples como setIntervalescuta de eventos ou ao fazer 
//chamadas de API.

setInterval(function () {
  console.log("hello!");
}, 3000);

// Cuidado com a setInterval porque vai executando o codigo a cada 3 segundos
