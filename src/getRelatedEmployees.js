const data = require('../data/zoo_data');

function isManager(id) {
  const thatEmployee = data.employees.some((employee) => employee.managers.includes(id))
  return thatEmployee;
}

function getRelatedEmployees(managerId) {
  // seu código aqui
}

module.exports = { isManager, getRelatedEmployees };
