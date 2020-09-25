let botao = document.getElementById("botao");
// console.log(botao);
let contagem = 0;
botao.addEventListener("click", ()=> {
  contagem += 1;
  console.log(contagem);
});
