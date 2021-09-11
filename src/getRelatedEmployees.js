const data = require('../data/zoo_data');

const stephanieId = '9e7d4524-363c-416a-8759-8aa7e50c0992';
const olaId = 'fdb2543b-5662-46a7-badc-93d960fdc0a8';
const burlId = '0e7b460e-acf4-4e17-bcb3-ee472265db83';
const managers = [stephanieId, olaId, burlId];

function isManager(id) {
  return managers.some((manager) => manager === id);
}

function getRelatedEmployees(managerId) {
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  const { employees } = data;
  const managedById = employees.filter((employee) => employee.managers.includes(managerId));
  const getFullName = (employee) => `${employee.firstName} ${employee.lastName}`;
  const managedNames = managedById.reduce((list, person) => list.concat(getFullName(person)), []);
  return managedNames;
}

module.exports = { isManager, getRelatedEmployees };
