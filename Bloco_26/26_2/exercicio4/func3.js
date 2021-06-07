const fs = require("fs/promises");

const changeFile = async () => {
  try {
    const allSimpsons = await fs.readFile("./simpsons.json", "utf-8");
    const allSimpsonsJson = await JSON.parse(allSimpsons);
    const filteredSimpsons = await allSimpsonsJson.filter((name)=> (name.id != 10 && name.id !=6))
    const filteredSimpsonsStringfy = JSON.stringify(filteredSimpsons);
    await fs.writeFile("./simpsons.json", filteredSimpsonsStringfy);
  } catch (err) {
    console.log(`erro ao realizar a requisição ${err.message}`);
  }
};


changeFile()