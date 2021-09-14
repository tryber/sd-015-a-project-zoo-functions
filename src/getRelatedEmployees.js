const data = require('../data/zoo_data');

function isManager(id) {
  return data.employees.some((manager) => manager.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }

  return data.employees
    .filter((employeesManager) => employeesManager.managers.includes(managerId))
    .map((name) => `${name.firstName} ${name.lastName}`);
}

module.exports = { isManager, getRelatedEmployees };
