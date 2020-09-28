const lesson1 = {
  materia: "Matemática",
  numeroEstudantes: 20,
  professor: "Maria Clara",
  turno: "manhã",
};

const lesson2 = {
  materia: "História",
  numeroEstudantes: 20,
  professor: "Carlos",
};

const lesson3 = {
  materia: "Matemática",
  numeroEstudantes: 10,
  professor: "Maria Clara",
  turno: "noite",
};

const listObjectKeys = (obj) => {
  console.log(Object.keys(obj));
};

const showSizeOfAnObject = (obj) => {
    let tamanho = 0;
    for (size in obj){
        tamanho +=1;
    }
    console.log(tamanho);
}

const listObjectValues = (obj) => {
  console.log(Object.values(obj));
};

listObjectKeys(lesson3);
showSizeOfAnObject(lesson3);
listObjectValues(lesson3);