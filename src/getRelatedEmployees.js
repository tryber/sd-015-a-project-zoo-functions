const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {
  const pessoaGerente = data.employees.some((elemento) => elemento.managers.includes((id)));
  return pessoaGerente;
}

function getRelatedEmployees(managerId) {
  const ehGerente = isManager(managerId);

  if (ehGerente) {
    return employees.filter((elemento) => elemento.managers.includes(managerId))
      .map((elemento) => `${elemento.firstName} ${elemento.lastName}`);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
