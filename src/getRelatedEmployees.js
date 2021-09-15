const data = require('../data/zoo_data');

const burlId = '0e7b460e-acf4-4e17-bcb3-ee472265db83';

function isManager(id) {
  return data.employees.some((element) =>
    element.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId)) {
    return data.employees
      .filter((element) => element.managers.includes(managerId))
      .map((element) => `${element.firstName} ${element.lastName}`);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
