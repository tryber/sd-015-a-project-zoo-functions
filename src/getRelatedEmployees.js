const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {
  const manager = employees.some((element) => element.managers.includes(id));
  return manager;
}

function getRelatedEmployees(managerId) {
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  const idEmployees = employees.filter((element) => element.managers.includes(managerId))
    .map((callnames) => `${callnames.firstName} ${callnames.lastName}`);
  return idEmployees;
}

module.exports = { isManager, getRelatedEmployees };
