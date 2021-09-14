const data = require('../data/zoo_data');
const { employees } = data;

function isManager(id) {
  // seu código aqui
  const managers = ['b0dc644a-5335-489b-8a2c-4e086c7819a2', '0e7b460e-acf4-4e17-bcb3-ee472265db83',
  'fdb2543b-5662-46a7-badc-93d960fdc0a8', '9e7d4524-363c-416a-8759-8aa7e50c0992'];
  const employee = managers.some((employee1) => employee1 === id);
  return employee;
}
// console.log(isManager('0e7b460e-acf4-4e17-bcb3-ee472265db83'));
function getRelatedEmployees(managerId) {
  // seu código aqui
  const employeesByManager = employees.reduce((acc, curr) => (curr.managers.includes(managerId)) ? acc.concat(`${curr.firstName} ${curr.lastName}`) : acc, []);
  if (isManager(managerId) === true) {
    return employeesByManager;
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}
// console.log(getRelatedEmployees('fdb2543b-5662-46a7-badc-93d960fdc0a8'))
//Stephanie = Burl, Ola, Emery
// Burl && Ola = Nigel, Wilburn, Sharonda
// Emery = Ardith

//Emery Elser > Ardith Azevado
// Burl Bethea && Ola Orloff < Stephanie Strauss
//Stephanie Strauss > TODOS
module.exports = { isManager, getRelatedEmployees };
