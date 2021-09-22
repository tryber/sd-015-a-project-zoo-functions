const data = require('../data/zoo_data');

const { employees } = data;

function isManager(id) {
  return employees.some((element) => element.managers.includes(id));
}
console.log(isManager('4b40a139-d4dc-4f09-822d-ec25e819a5ad'));
console.log(isManager('0e7b460e-acf4-4e17-bcb3-ee472265db83'));
console.log(isManager('4b40a139-d4dc-4f09-822d-ec25e819a5ad'));

function getRelatedEmployees(managerId) {
  if (isManager(managerId) === true) {
    return employees
      .filter((element) => (element.managers.includes(managerId)))
      .map((element2) => `${element2.firstName} ${element2.lastName}`);
  } throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

console.log(getRelatedEmployees('0e7b460e-acf4-4e17-bcb3-ee472265db83'));
module.exports = { isManager, getRelatedEmployees };
