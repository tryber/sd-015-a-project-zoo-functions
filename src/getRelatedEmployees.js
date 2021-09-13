const data = require('../data/zoo_data');

const { employees } = data;

function isManager(id) {
  return employees.some((element) => employees.isManager === )
}

function getRelatedEmployees(managerId) {
  // seu código aqui
}

module.exports = { isManager, getRelatedEmployees };
