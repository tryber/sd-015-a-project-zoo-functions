const data = require('../data/zoo_data');

function isManager(collaborator) {
  return data.employees.some((employee) => employee.managers.includes(collaborator));
}

function getRelatedEmployees(managerId) {
}
module.exports = { isManager, getRelatedEmployees };
