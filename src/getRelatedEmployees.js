const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {
  // seu código aqui
  return employees.some((element) => element.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  // seu código aqui
  if (isManager(managerId) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  if (isManager(managerId) === true) {
    const findManager = employees.filter((element) => element.managers[0] === managerId);
    const toReturn = findManager.map((element) => `${element.firstName} ${element.lastName}`);
    return toReturn;
  }
}
/* console.log(getRelatedEmployees("0e7b460e-acf4-4e17-bcb3-ee472265db83"));
console.log(getRelatedEmployees("c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1"));  */

module.exports = { isManager, getRelatedEmployees };
