const data = require('../data/zoo_data');

function isManager(id) {
  // seu código aqui
  const managers = data.employees.map((element) => element.managers.filter((man) => man === id));
  if (managers.find((item) => item.length > 0) !== undefined) return true;
  return false;
}

function getRelatedEmployees(managerId) {
  // seu código aqui
  if (isManager(managerId)) {
    const managers = data.employees.filter((ele) => ele.managers.find((man) => man === managerId));
    return managers.map((item) => `${item.firstName} ${item.lastName}`);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
