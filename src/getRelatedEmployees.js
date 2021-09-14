const data = require('../data/zoo_data');

function isManager(id) {
  // seu código aqui
  return data.employees.some((employee) => employee.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  // seu código aqui
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  const searchingEmployee = data.employees.filter((employee) => 
  employee.managers.includes(managerId));
  return searchingEmployee.map((employee) => `${employee.firstName} ${employee.lastName}`);
}

module.exports = { isManager, getRelatedEmployees };
