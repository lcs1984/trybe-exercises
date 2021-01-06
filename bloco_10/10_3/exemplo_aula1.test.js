const {retornaNumeroAleatorio, divisivelPorDois} = require('./exemplo_aula1');

test('quando o número aleatório é par, a função retorna `true`', () => {
  expect(divisivelPorDois()).toBe(true); // Como garantimos que o número retornado será par?
})