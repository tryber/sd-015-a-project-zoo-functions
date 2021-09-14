const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {
  return employees
    .some((employee) => employee.managers
      .some((idCurrent) => idCurrent === id));
}

function getRelatedEmployees(managerId) {
  let commandedEmployees = [];
  if (isManager(managerId)) {
    commandedEmployees = employees.filter((employee) => (employee.managers.includes(managerId)));
  } else {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }

  return commandedEmployees.map((employee) => `${employee.firstName} ${employee.lastName}`);
}

module.exports = { isManager, getRelatedEmployees };
