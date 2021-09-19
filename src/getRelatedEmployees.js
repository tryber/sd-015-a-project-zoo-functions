const data = require('../data/zoo_data');

function isManager(id) {
  return data.employees.some((employees) => employees.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId)) {
    return data.employees.filter((emplyees) => (
      emplyees.managers.includes(managerId)
    )).map((employees) => `${employees.firstName} ${employees.lastName}`);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
