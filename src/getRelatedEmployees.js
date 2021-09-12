const data = require('../data/zoo_data');

const { employees } = data;

function isManager(id) {
  // seu código aqui
  return employees.some((e) => (e.managers.includes(id)));
}

function getNames(id) {
  const people = employees.filter((e) => e.managers.includes(id));
  return people.map((e) => `${e.firstName} ${e.lastName}`);
}

function getRelatedEmployees(managerId) {
  // seu código aqui
  const manager = isManager(managerId);
  if (manager) {
    const arr = getNames(managerId);
    return arr;
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
