const data = require('../data/zoo_data');

function isManager(id) {
  const gerente = data.employees.some((pessoa) => pessoa.managers.includes(id));
  return gerente;
}

function getRelatedEmployees(managerId) {
  function lintReclamando(pessoa) {
    if (pessoa.managers.includes(managerId)) {
      return pessoa;
    }
  }
  if (isManager(managerId)) {
    const nome = data.employees.filter(lintReclamando);
    const pessoas = nome.reduce((acc, atual) => {
      acc.push(`${atual.firstName} ${atual.lastName}`);
      return acc;
    }, []);
    return pessoas;
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
