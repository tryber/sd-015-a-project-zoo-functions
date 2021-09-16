const data = require('../data/zoo_data');

function isManager(id) {
  const check = data.employees.some((element) => element.managers.includes(id));
  return check;
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId)) {
    const names = data.employees.filter((element) => element.managers.includes(managerId));
    return names.map((element) => `${element.firstName} ${element.lastName}`);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
