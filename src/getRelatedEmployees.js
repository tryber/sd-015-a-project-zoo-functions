const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {
  return employees.some((employSome) => employSome.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId)) {
    const collaborators = employees.filter((employFilter) =>
      employFilter.managers.includes(managerId));
    const result = collaborators.map((employMap) => `${employMap.firstName} ${employMap.lastName}`);
    return result;
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
