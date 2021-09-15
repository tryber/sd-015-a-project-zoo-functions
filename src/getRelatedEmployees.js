const data = require('../data/zoo_data');

function isManager(id) {
  return data.employees.some((ids) => ids.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId)) {
    const nomeCompleto = data.employees.filter((param) => param.managers.includes(managerId));
    return nomeCompleto.map((names) => `${names.firstName} ${names.lastName}`);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
