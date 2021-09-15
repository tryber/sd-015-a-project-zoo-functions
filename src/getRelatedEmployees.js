const data = require('../data/zoo_data');

function isManager(id) {
  // seu código aqui
  return data.employees.some((employee) => employee.managers.some((manager) => manager === id));
}

function getRelatedEmployees(managerId) {
  // seu código aqui
  const error = 'O id inserido não é de uma pessoa colaboradora gerente!';
  if (!isManager(managerId)) throw new Error(error);
  return data.employees.map((employee) => {
    if (employee.managers.some((manager) => manager === managerId)) {
      return `${employee.firstName} ${employee.lastName}`;
    }
    return null;
  }).filter((employee) => employee !== null);
}

module.exports = { isManager, getRelatedEmployees };
