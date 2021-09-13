const data = require('../data/zoo_data');

const [...employees] = data.employees;
const stephanieId = '9e7d4524-363c-416a-8759-8aa7e50c0992';
const olaId = 'fdb2543b-5662-46a7-badc-93d960fdc0a8';
const burlId = '0e7b460e-acf4-4e17-bcb3-ee472265db83';
const managers = [stephanieId, olaId, burlId];

function isManager(id) {
  // Usando some pois retorna True or False
  return managers.some((manager) => manager === id);
}

function getRelatedEmployees(managerId) {
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  const employeeName = employees
    .filter((employee) => employee.managers.includes(managerId))
    .map((employeeByManager) => `${employeeByManager.firstName} ${employeeByManager.lastName}`);
  return employeeName;
}

module.exports = { isManager, getRelatedEmployees };
