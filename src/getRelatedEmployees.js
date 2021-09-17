// const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

// Primeiro = Busco em data a key employees.
// Segunda - Dentro de employees, busco dentro das keys managers se existe algum valor igual ao passado no parametro id.
function isManager(id) {
  return data.employees.some((person) => person.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  const person = data.employees.filter((peps) => peps.managers.includes(managerId));
  return person.map((peps) => `${peps.firstName} ${peps.lastName}`);
}

module.exports = { isManager, getRelatedEmployees };
