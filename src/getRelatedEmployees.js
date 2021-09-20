const data = require('../data/zoo_data');

const { employees } = data;

function isManager(id) {
  return employees.some((funcionario) => funcionario.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  const findFun = employees.filter((elemento) => elemento.managers.includes(managerId));
  const fullNames = findFun.map((person) => `${person.firstName} ${person.lastName}`);
  console.log(fullNames);
  return fullNames;
}

module.exports = { isManager, getRelatedEmployees };
