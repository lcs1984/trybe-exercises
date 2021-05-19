const readline = require('readline-sync');

// Criamos uma lista dos scripts disponíveis
// Utilizamos objetos com `name` e `script` para facilitar a criação da lista que será exibida
const scripts = [
  { name: 'Calcular IMC', script: './imc.js' },
  { name: 'Calcular velocidade média', script: './velocidade.js' },
  { name: 'Jogo de adivinhação', script: './sorteio.js' },
];
// console.log(scripts);
// Iteramos sobre os scripts para criar a lista numerada
let mensagem = scripts
  .map((script, index) => `${index + 1} - ${script.name}`);
  // Adicionamos uma linha a mais no começo da mensagem
  // console.log(mensagem)
  mensagem.unshift('Escolha um número para executar o script correspondente');
  // console.log(mensagem)
  // console.log("oi ", mensagem);
  // console.log([
  //   'Escolha um número para executar o script correspondente',
  //   '1 - Calcular IMC',
  //   '2 - Calcular velocidade média',
  //   '3 - Jogo de adivinhação'
 let newMessage = mensagem.join('\n');
  // console.log(nm)
  
const scriptNumber = readline.questionInt(newMessage) - 1;

const script = scripts[scriptNumber];

if (!script) return console.log('Número inválido. Saindo');

// Chamamos o script selecionado
// Note que, no dia a dia, é mais comum utilizarmos outras formas de executar arquivos externos
// No entanto, para fins didáticos, o `require` nos atende por enquanto.
require(script.script);
// require('./velocidade.js')