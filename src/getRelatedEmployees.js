const data = require('../data/zoo_data');

const managers = [
  '9e7d4524-363c-416a-8759-8aa7e50c0992',
  'fdb2543b-5662-46a7-badc-93d960fdc0a8',
  '0e7b460e-acf4-4e17-bcb3-ee472265db83',
];

function isManager(id) {
  return managers.some((manager) => manager === id);
}

function getRelatedEmployees(managerId) {
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  const getEmployees = data.employees.filter((employee) => employee.managers.includes(managerId));
  const employeesFirstName = getEmployees.map((first) => first.firstName);
  const employeesLastName = getEmployees.map((last) => last.lastName);
  const employeesFullName = [];
  for (let i = 0; i < employeesFirstName.length; i += 1) {
    employeesFullName.push(`${employeesFirstName[i]} ${employeesLastName[i]}`);
  }
  return employeesFullName;
}

module.exports = { isManager, getRelatedEmployees };
