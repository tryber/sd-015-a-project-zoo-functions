const data = require('../data/zoo_data');

const stephanieId = '9e7d4524-363c-416a-8759-8aa7e50c0992';
const olaId = 'fdb2543b-5662-46a7-badc-93d960fdc0a8';
const burlId = '0e7b460e-acf4-4e17-bcb3-ee472265db83';
const managers = [stephanieId, olaId, burlId];

function isManager(id) {
  const actualEmployee = data.employees.find((employee) => employee.id === id);
  return managers.some((manegerId) => manegerId === actualEmployee.id);
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  const employees = data.employees.filter((employee) => employee.managers.includes(managerId));
  const names = [];
  employees.forEach((employee) => names.push(`${employee.firstName} ${employee.lastName}`));
  return names;
}

console.log(getRelatedEmployees(stephanieId));

module.exports = { isManager, getRelatedEmployees };
