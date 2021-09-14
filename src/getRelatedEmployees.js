const data = require('../data/zoo_data');

const { employees } = data;

function isManager(id) {
  const allManagersIds = [];
  employees.forEach((elm) => allManagersIds.push(...elm.managers));
  return allManagersIds.includes(id);
}

function getRelatedEmployees(managerId) {
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  const responsibleFor = employees.filter((elm) => elm.managers.includes(managerId));
  return responsibleFor.map((elm) => `${elm.firstName} ${elm.lastName}`);
}

module.exports = { isManager, getRelatedEmployees };
