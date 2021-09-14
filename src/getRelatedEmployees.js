const data = require('../data/zoo_data');

function isManager(id) {
  return data.employees.some((x) => x.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId)) {
    return data.employees.filter((x) => x.managers.includes(managerId))
      .map((x) => `${x.firstName} ${x.lastName}`);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
