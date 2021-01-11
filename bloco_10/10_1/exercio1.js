// Desafio 9
function encode(stringDecodifique) {
    // seu código aqui
    let novaString = stringDecodifique;
    //let arrayDeLetras = stringDecodifique.split("");
    for (i = 0; i < stringDecodifique.length; i += 1) {
      if (stringDecodifique[i] === "a") {
        novaString = novaString.replace("a", "1");
      } else if (stringDecodifique[i] === "e") {
        novaString = novaString.replace("e", "2");
      } else if (stringDecodifique[i] === "i") {
        novaString = novaString.replace("i", "3");
      } else if (stringDecodifique[i] === "o") {
        novaString = novaString.replace("o", "4");
      } else if (stringDecodifique[i] === "u") {
        novaString = novaString.replace("u", "5");
      }
    }
    console.log(novaString);
    return novaString;
  }
  
  function decode(stringEncodifique) {
    // seu código aqui
    let novaString = stringEncodifique;
    //let arrayDeLetras = stringDecodifique.split("");
    for (i = 0; i < stringEncodifique.length; i += 1) {
      if (stringEncodifique[i] === "1") {
        novaString = novaString.replace("1", "a");
      } else if (stringEncodifique[i] === "2") {
        novaString = novaString.replace("2", "e");
      } else if (stringEncodifique[i] === "3") {
        novaString = novaString.replace("3", "i");
      } else if (stringEncodifique[i] === "4") {
        novaString = novaString.replace("4", "o");
      } else if (stringEncodifique[i] === "5") {
        novaString = novaString.replace("5", "u");
      }
    }
    console.log(novaString);
    return novaString;
  }

  console.log(encode('b'))

  module.exports = {encode, decode};