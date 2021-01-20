
const person = {
    name:'Roberto',
  };
  
  const lastName = {
    lastName: 'Silva',
  };
  
  const newPerson = Object.assign({},person,lastName);
  const newClone = Object.assign(person,lastName);
  newPerson.name = 'Gilberto';
  console.log(newPerson);
  console.log(person);
  console.log(newClone);