const data = require('../data/zoo_data');

function isManager(id) {
  const managers = [
    '0e7b460e-acf4-4e17-bcb3-ee472265db83',
    'fdb2543b-5662-46a7-badc-93d960fdc0a8',
    '9e7d4524-363c-416a-8759-8aa7e50c0992',
  ];
  const manager = managers.some((employee1) => employee1 === id);
  return manager;
}

function getRelatedEmployees(managerId) {
  // seu código aqui
  if (isManager(managerId)) {
    return data.employees.filter((employed) => (
      employed.managers.includes(managerId)
    )).map((employee) => `${employee.firstName} ${employee.lastName}`);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
