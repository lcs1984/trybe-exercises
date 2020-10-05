const character = ["a", "b", "c"];

const students = [
    { name: 'Maria', note: 70, approved: '' },
    { name: 'José', note: 56, approved: '' },
    { name: 'Roberto', note: 90, approved: '' },
    { name: 'Ana', note: 81, approved: '' }
  ];

character.forEach((index)=> {console.log(index)})
students.forEach((index)=> {console.log(index.note)})
students.forEach((index)=> {index.approved = true})
console.log(students);