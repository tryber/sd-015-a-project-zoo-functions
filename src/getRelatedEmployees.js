const data = require('../data/zoo_data');

function isManager(id) {
  // seu código aqui
  const { employees } = data;
  return employees.some((employee) =>
    employee.managers.some((manager) => manager === id));
}

function getRelatedEmployees(managerId) {
  // seu código aqui
  if (isManager(managerId)) {
    const { employees } = data;
    const employeesRelated = employees.filter((employee) =>
      employee.managers.some((manager) => manager === managerId));
    return employeesRelated.map((employee) => `${employee.firstName} ${employee.lastName}`);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
