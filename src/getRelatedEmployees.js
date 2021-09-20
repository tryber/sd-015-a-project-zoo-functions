const data = require('../data/zoo_data');

function isManager(id) {
  return data.employees.some((employ) => employ.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  const verificaManager = isManager(managerId);

  if (verificaManager) {
    const employ = data.employees.filter((objeto) => objeto.managers.includes(managerId));
    return employ.map((obj) => `${obj.firstName} ${obj.lastName}`);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
