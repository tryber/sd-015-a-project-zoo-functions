const { employees } = require('../data/zoo_data');

function isManager(id) {
  const result = employees.some(({ managers }) => managers.some((manager) => manager === id));
  return result;
}

function getRelatedEmployees(managerId) {
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  const managedEmp = employees
    .filter((manage) => manage.managers.includes(managerId))
    .map((managed) => `${managed.firstName} ${managed.lastName}`);
  console.log(managedEmp);
  return managedEmp;
}

module.exports = { isManager, getRelatedEmployees };
