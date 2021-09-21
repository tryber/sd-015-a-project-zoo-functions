const data = require('../data/zoo_data');

function isManager(id) {
  return data.employees.some((funcionario) => funcionario.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId)) {
    const ehDoGerente = (funcionario) => funcionario.managers.includes(managerId);
    const nomeFuncionario = (funcionario) => `${funcionario.firstName} ${funcionario.lastName}`;
    return data.employees.filter(ehDoGerente).map(nomeFuncionario);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
