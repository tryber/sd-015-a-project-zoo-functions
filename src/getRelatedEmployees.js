const data = require('../data/zoo_data');

const { employees } = data;

function isManager(id) {
  // seu código aqui
  const managers = employees.map((aux) => `${aux.managers}`);
  return managers.some((aux) => aux.includes(id));
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  } else {
    return employees
      .filter((aux) => aux.managers.includes(managerId))
      .map((aux) => `${aux.firstName} ${aux.lastName}`);
  }
}

module.exports = { isManager, getRelatedEmployees };

console.log(isManager('0e7b460e-acf4-4e17-bcb3-ee472265db83'));
