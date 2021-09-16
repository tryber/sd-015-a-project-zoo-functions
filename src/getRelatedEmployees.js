const data = require('../data/zoo_data');

function isManager(id) {
  const isIdManager = data.employees.some((employee) => employee.managers.includes(id));
  return isIdManager;
}

function getRelatedEmployees(managerId) {
  const verifyId = isManager(managerId);
  if (verifyId) {
    const employeeManaged = data.employees.filter(
      (employee) => employee.managers.includes(managerId),
    );
    const employees = employeeManaged.map(
      (employee) => `${employee.firstName} ${employee.lastName}`,
    );
    return employees;
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };

console.log(isManager('fdb2543b-5662-46a7-badc-93d960fdc0a8'));
console.log(getRelatedEmployees('fdb2543b-5662-46a7-badc-93d960fdc0a8'));
