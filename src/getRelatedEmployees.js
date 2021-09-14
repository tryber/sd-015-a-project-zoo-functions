const data = require('../data/zoo_data');

function isManager(id) {
  const gerente = data.employees.some((funcionario) =>
    funcionario.managers.some((idManager) => idManager === id));
  return gerente;
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId)) {
    const employee = data.employees.filter((funcionario) =>
      funcionario.managers.some((gerente) => gerente === managerId));
    return employee.map((funca) => `${funca.firstName} ${funca.lastName}`);
  }

  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
