const fs = require("fs/promises");

// async function readAll(fileName) {
//   try {
//     const result = await fs.readFile("./simpsons.json", "utf-8");
//     const result2 = await JSON.parse(result);
//     console.log(result2.map((elem) => `${elem.id} - ${elem.name}`));
//   } catch (err) {
//     console.log(`Erro econtrado ${err.message}`);
//   }
// }

const readAll = async (fileName) => {
    try {
      const result = await fs.readFile(fileName, "utf-8");
      const result2 = await JSON.parse(result);
      console.log(result2.map((elem) => `${elem.id} - ${elem.name}`));
    } catch (err) {
      console.log(`Erro econtrado ${err.message}`);
    }
  }

readAll("./simpsons.json");
