const data = require('../data/zoo_data');
const { employees } = require('../data/zoo_data');

function isManager(id) {
  return employees.some((employee) => employee.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId)) {
    const findWorkers = employees.filter((colaborators) =>
      (colaborators.managers.includes(managerId)));
    const relatedWorkers = findWorkers.map((employee) =>
      `${employee.firstName} ${employee.lastName}`);
    return relatedWorkers;
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
