const data = require('../data/zoo_data');

const { employees } = data;

function isManager(id) {
  // seu código aqui
  return employees.some((employee) => employee.managers.includes(id));
}
// console.log(isManager('9e7d4524-363c-416a-8759-8aa7e50c0992'));
function employeesByManager(managerId) {
  return employees.reduce((acc, curr) => ((curr.managers.includes(managerId))
    ? acc.concat(`${curr.firstName} ${curr.lastName}`) : acc), []);
}

function getRelatedEmployees(managerId) {
  // seu código aqui
  if (isManager(managerId) === true) {
    return employeesByManager(managerId);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}
// console.log(getRelatedEmployees('fdb2543b-5662-46a7-badc-93d960fdc0a8'))
// Stephanie = Burl, Ola, Emery
// Burl && Ola = Nigel, Wilburn, Sharonda
// Emery = Ardith

// Emery Elser > Ardith Azevado
// Burl Bethea && Ola Orloff < Stephanie Strauss
// Stephanie Strauss > TODOS
module.exports = { isManager, getRelatedEmployees };
