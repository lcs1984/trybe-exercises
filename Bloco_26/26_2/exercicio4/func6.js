const fs = require("fs/promises");

const replaceNelson = async () => {
    try {
        const allFamily = await fs.readFile('./simpsonsFamily.json', 'utf-8');
        const allFamilyJson = await JSON.parse(allFamily);
        const familyExNelson = await allFamilyJson.filter((elem)=> elem.id != 11);
        await familyExNelson.push({"id": "11", "name": "Maggie Simpson"})
        console.log(familyExNelson)
    } catch (err) {
        console.log(`No exercício encontramos o seguinte erro ${err.message}`)
    }
}


replaceNelson();