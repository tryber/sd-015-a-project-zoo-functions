const data = require('../data/zoo_data');

const isManager = (id) => data.employees.some((is) => is.managers.includes(id));

function getRelatedEmployees(managerId) {
  // seu código aqui
  if (isManager(managerId)) {
    const employeers = data.employees.filter((emp) => emp.managers.includes(managerId));
    const relatedemployers = employeers
      .map((related) => `${related.firstName} ${related.lastName}`);
    return relatedemployers;
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
