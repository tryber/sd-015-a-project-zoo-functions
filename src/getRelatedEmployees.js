const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const olaId = 'fdb2543b-5662-46a7-badc-93d960fdc0a8';
const burlId = '0e7b460e-acf4-4e17-bcb3-ee472265db83';

function isManager(managerId) {
  return !employees.find(({ id }) => id === managerId)
    .managers.some((gerente) => gerente === olaId || gerente === burlId);
}

function getSpeciesByIds(id) {
  return data.employees.filter((people) => people.managers
    .find((gerente) => gerente === id))
    .map((nome) => `${nome.firstName} ${nome.lastName}`);
}
//
function getRelatedEmployees(managerId) {
  if (isManager(managerId)) {
    const employeesId = employees.find(({ id }) => id === managerId).id;
    return getSpeciesByIds(employeesId);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
