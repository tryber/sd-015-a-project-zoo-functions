const data = require('../data/zoo_data');
const { employees } = data;

function isManager(id) {
  return employees.some((worker) => worker.managers.some((managerId) => managerId === id));
}

function getRelatedEmployees(managerId) {
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  const workersNames = employees.filter((employee) => employee.managers.includes(managerId));
  return workersNames.map((objEmployee) => `${objEmployee.firstName} ${objEmployee.lastName}`);
}

module.exports = { isManager, getRelatedEmployees };
