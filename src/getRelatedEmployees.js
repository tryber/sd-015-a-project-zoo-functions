const data = require('../data/zoo_data');

function isManager(id) {
  return data.employees.some((itsAManager) => itsAManager.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  const empManaged = data.employees.filter((manager) => manager.managers.includes(managerId));
  const peopleManaged = empManaged.map((employee) => `${employee.firstName} ${employee.lastName}`);
  return peopleManaged;
}

module.exports = { isManager, getRelatedEmployees };
