const data = require('../data/zoo_data');

function isManager(id) {
  // seu código aqui
  const { employees } = data;
  const novoArrayManagers = employees.map((fun) => fun.managers);
  return novoArrayManagers.some((chave) => chave.includes(id));
}

function getRelatedEmployees(managerId) {
  // seu código aqui
  const { employees } = data;
  if (isManager(managerId) === true) {
    const acharPessoa = employees.filter((ger) => ger.managers.includes(managerId));
    return acharPessoa.map((pessoa) => `${pessoa.firstName} ${pessoa.lastName}`);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}
module.exports = { isManager, getRelatedEmployees };
