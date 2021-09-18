const data = require('../data/zoo_data');

function isManager(id) {
  return data.employees.some((person) => person.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId)) {
    const relatedEmployees = data.employees.filter((person) => person.managers.includes(managerId));
    return relatedEmployees.map((employee) => `${employee.firstName} ${employee.lastName}`);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
