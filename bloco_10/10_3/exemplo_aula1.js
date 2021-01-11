const retornaNumeroAleatorio = () => Math.floor(Math.random() * 100);

const divisivelPorDois = () => (retornaNumeroAleatorio() % 2) === 0;


console.log(divisivelPorDois());

module.exports = {retornaNumeroAleatorio, divisivelPorDois};