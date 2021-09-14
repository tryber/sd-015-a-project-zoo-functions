const data = require('../data/zoo_data');

const { employees } = data;

function isManager(id) {
  return employees.some((element) => element.managers.includes(id));
}
console.log(isManager('stephanieId'));

function getRelatedEmployees(managerId) {
  if(isManager() === true) {
    return employees.map((element) => element.managers);
  } throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

console.log(getRelatedEmployees('stephanieId'));
module.exports = { isManager, getRelatedEmployees };
