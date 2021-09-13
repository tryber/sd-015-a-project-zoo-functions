const data = require('../data/zoo_data');

let colaborators = [];

function isManager(id) {
  return data.employees.some((value) => value.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }

  colaborators = data.employees.filter((value) => value.managers.includes(managerId));
  colaborators = colaborators.map((value) => `${value.firstName} ${value.lastName}`);
  return colaborators;
}

module.exports = { isManager, getRelatedEmployees };
