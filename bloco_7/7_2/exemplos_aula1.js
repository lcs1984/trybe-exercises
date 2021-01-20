const customer = {
    fistName: 'Roberto',
    age: 22,
    job: 'Teacher',
};

customer.lastName= 'Campos';

console.log(customer.lastName);

customer['midName'] = 'Alberto';

console.log(customer.midName);

let newKey = 'lastName';
const lastName = 'Ferreira';
customer[newKey]=lastName;
const fullName = `${customer.fistName} ${customer.midName} ${customer.lastName}`;
customer[newKey]=fullName;

console.log(customer);

// Perguntar no plantão como fazer
// function alteraObejto (novoObjeto, chave, valor){
//     `${novoObjeto}` = {};
//     novoObjeto[`${chave}`] = `${valor}`
// }

let obj = {0:'a', 1:'b', 2:'c'};
console.log(Object.keys(obj));

let an_obj = {100:'a', 2:'b', 7:'c'};
console.log(Object.keys(an_obj));