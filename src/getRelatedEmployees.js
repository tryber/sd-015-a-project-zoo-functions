const data = require('../data/zoo_data');

function isManager(id) {
  // seu código aqui
  return data.employees.some((elem) => elem.managers.id === id);
}

function getRelatedEmployees(managerId) {
  // seu código aqui
}

module.exports = { isManager, getRelatedEmployees };
