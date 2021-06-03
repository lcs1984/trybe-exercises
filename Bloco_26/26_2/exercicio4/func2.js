const fs = require('fs/promises');

const getById = async (numberId) => {
    try {
        const allSimpsons = await fs.readFile('./simpsons.json', "utf-8");
        const allSimpsonsJson = await JSON.parse(allSimpsons);
        const simpsonId = allSimpsonsJson.find((elem)=> elem.id == numberId);
        console.log(simpsonId);

    } catch (err) {
        console.log("id não encontrado");
    }
}

getById(1);