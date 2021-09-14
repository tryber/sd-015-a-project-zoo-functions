const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {
  return employees.some((element) => element.managers.find((elm) => elm === id) === id);
}

function getRelatedEmployees(managerId) {
  if (!isManager (managerId))
   throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  return employees.filter((funcionarios) => funcionarios.managers
  .find((gerente) => gerente === managerId) === managerId)
  .map((encontrei) => `${encontrei.firstName} ${encontrei.lastName}`);
}

module.exports = { isManager, getRelatedEmployees };
