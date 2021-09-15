const data = require('../data/zoo_data');

const { employees } = data;

function isManager(id) {
  return employees.some((element) => element.managers.some((manager) => manager === id));
}

function getRelatedEmployees(managerId) {
  const manager = isManager(managerId);

  if (manager !== true) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  return employees
    .filter((employee) => employee.managers
      .includes(managerId))
    .map((element) => `${element.firstName} ${element.lastName}`);
}

module.exports = { isManager, getRelatedEmployees };
