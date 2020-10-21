//Nomeando funções de retorno de chamada: 
//As funções de retorno de chamada podem ser funções 
// nomeadas ou anônimas. Em nossos primeiros exemplos, 
// usamos funções de retorno de chamada anônimas. Vejamos 
// uma função de retorno de chamada nomeada:

function greeting(name) {
    console.log(`Hello ${name}, welcome to Scotch!`);
  }

  function introduction(firstName, lastName, callback) {
    const fullName = `${firstName} ${lastName}`;
  
    callback(fullName);
  }
  
  introduction('Chris','Nwamba', greeting);