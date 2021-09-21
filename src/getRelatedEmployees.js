const { employees } = require('../data/zoo_data');

function isManager(id) {
  // seu código aqui
  const manager = employees.some((unit) => unit.managers.includes(id));
  return manager;
}

console.log(isManager('9e7d4524-363c-416a-8759-8aa7e50c0992'));

function getRelatedEmployees(managerId) {
  // seu código aqui
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  return employees.filter((unit) =>
    unit.managers.includes(managerId)).map((unit) => `${unit.firstName} ${unit.lastName}`);
}

module.exports = { isManager, getRelatedEmployees };
