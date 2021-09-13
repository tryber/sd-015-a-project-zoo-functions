const data = require('../data/zoo_data');

const { employees } = data;

const isManager = (id) => employees.some((e) => (e.managers.includes(id)));

const getNames = (id) => employees
  .filter((e) => e.managers.includes(id))
  .map((e) => `${e.firstName} ${e.lastName}`);

function getRelatedEmployees(managerId) {
  const manager = isManager(managerId);
  if (manager) return getNames(managerId);
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
