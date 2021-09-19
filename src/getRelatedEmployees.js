const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {
  return employees.some((value) => value.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId)) {
    const test = employees.filter((item) => item.managers.includes(managerId));

    const namesOfEmployees = [];
    test.forEach((employee) => namesOfEmployees.push(`${employee.firstName} ${employee.lastName}`));
    return namesOfEmployees;
  }

  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
