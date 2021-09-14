const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {
  // seu código aqui
  return employees.some((employee) => employee.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  // seu código aqui
  const findWorkers = employees.filter((colaborators) =>
  (colaborators.managers.includes(managerId)));
const relatedWorkers = findWorkers.map((employee) =>
  `${employee.firstName} ${employee.lastName}`);
return relatedWorkers;
}

module.exports = { isManager, getRelatedEmployees };
