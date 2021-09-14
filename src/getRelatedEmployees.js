const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {
  const findIfManager = employees.find((worker) => worker.managers.includes(id));
  if (findIfManager !== undefined) {
    return true;
  }
  return false;
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId) === true) {
    const findEmployees = employees.filter((worker) => worker.managers.includes(managerId));
    const arrayNames = findEmployees.map((person) => `${person.firstName} ${person.lastName}`);

    return arrayNames;
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
