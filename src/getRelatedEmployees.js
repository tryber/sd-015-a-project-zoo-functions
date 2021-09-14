const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(idEmployee) {
  return employees.some((person) => person.managers.includes(idEmployee));
  // seu código aqui
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId)) {
    return employees.filter((employeeName) => employeeName.managers.includes(managerId))
      .map((employeeName) => `${employeeName.firstName} ${employeeName.lastName}`);
  }

  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
