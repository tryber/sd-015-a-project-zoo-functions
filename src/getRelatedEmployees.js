const data = require('../data/zoo_data');

function isManager(id) {
  // seu código aqui
  // ref: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
  return data.employees.some((manager) => manager.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  // seu código aqui
  const employeesNames = data.employees
    .filter((employee) => employee.managers.includes(managerId))
    .map((name) => `${name.firstName} ${name.lastName}`);
  if (isManager(managerId) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  return employeesNames;
}

module.exports = { isManager, getRelatedEmployees };
