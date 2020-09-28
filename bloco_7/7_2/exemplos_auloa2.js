const objeto = (obj, key, value) => {
  const objeto = obj;
  const chave = key;
  const valor = value;
  const ob = (`${objeto}`[`${chave}`] = `${valor}`);
  return ob;
};

objeto('objetoNome', 'Nome', 'Leonardo');

// console.log(objeto('objetoNome', 'Nome', 'Leonardo'));

