const { employees } = require('../data/zoo_data');

const isManager = (id) => employees.some((employee) => employee.managers.includes(id));

function getRelatedEmployees(managerId) {
  if (isManager(managerId) === true) {
    const workers = employees.filter((employee) => employee.managers.includes(managerId));
    return workers.map((employee) => `${employee.firstName} ${employee.lastName}`);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
