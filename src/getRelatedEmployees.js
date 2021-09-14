const data = require('../data/zoo_data');

function isManager(id) {
  return data.employees
    .some((manager) => manager.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  return data.employees
    .filter((employee) => employee.managers.includes(managerId))
    .map((employee) => `${employee.firstName} ${employee.lastName}`);
}
module.exports = { isManager, getRelatedEmployees };
