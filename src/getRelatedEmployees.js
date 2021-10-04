const data = require('../data/zoo_data');

function isManager(id) {
  // seu código aqui
  return data.employees.some((employee) => employee.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  // seu código aqui
  const gerent = isManager(managerId);
  if (gerent) {
    return data.employees.filter((related) => related.managers.includes(managerId))
      .map((related) => `${related.firstName} ${related.lastName}`);
  }

  if (isManager !== true) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
}

module.exports = { isManager, getRelatedEmployees };
