const data = require('../data/zoo_data');

const { employees } = data;

function isManager(id) {
  return employees.some((element) => element.managers.includes(id));
}

function getRelatedEmployees(managerId) {
}

module.exports = { isManager, getRelatedEmployees };
