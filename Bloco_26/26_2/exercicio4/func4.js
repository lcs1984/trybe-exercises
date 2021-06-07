const fs = require("fs/promises");

const changeFile = async () => {
  try {
    const allSimpsons = await fs.readFile("./simpsons.json", "utf-8");
    const allSimpsonsJson = await JSON.parse(allSimpsons);
    await allSimpsonsJson.push({"id": "11", "name": "Nelson Muntz"})
    console.log(allSimpsonsJson);
    const allSimpsonsStringfy = JSON.stringify(allSimpsonsJson);
    await fs.writeFile("./simpsonsFamily.json", allSimpsonsStringfy);
  } catch (err) {
    console.log(`erro ao realizar a requisição ${err.message}`);
  }
};

changeFile()