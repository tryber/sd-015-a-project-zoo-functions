const data = require('../data/zoo_data');

function isManager(id) {
  return data.employees.some((employees) => employees.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  } else {
    return data.employees.filter((employees) => employees.managers.includes(managerId))
      .map((employe) => `${employe.firstName} ${employe.lastName}`);
  }
}

module.exports = { isManager, getRelatedEmployees };
