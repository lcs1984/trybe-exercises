const fs = require("fs/promises");

const creatingMultipleFiles = async () => {
  const arrayOfStrings = [
    "Finalmente",
    "estou",
    "usando",
    "Promise.all",
    "!!!",
  ];

  const createFilePromises = await arrayOfStrings.map((string, index) => {
    fs.writeFile(`./file${index + 1}.txt`, string);
  });

  await Promise.all(createFilePromises)
};


creatingMultipleFiles()
