const data = require('../data/zoo_data');

function isManager(id) {
  // seu código aqui
  const { employees } = data;
  const managers = [];
  employees.forEach((aux) => managers.concat(aux.managers));
  return managers.some((aux) => aux === id);

}

function getRelatedEmployees(managerId) {
}

module.exports = { isManager, getRelatedEmployees };

console.log(isManager('0e7b460e-acf4-4e17-bcb3-ee472265db83'));
