const data = require('../data/zoo_data');

const { employees } = data;

function isManager(id) {
  const verifyId = employees.some((employee) =>
    employee.managers.some((manager) => manager === id));
  return verifyId;
}
// const id = '0e7b460e-acf4-4e17-bcb3-ee472265db83';
function getRelatedEmployees(managerId) {
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  const underManager = employees.filter((employee) => employee.managers
    .find((manager) => manager === managerId));
  const namesUnderManager = underManager.map((under) => `${under.firstName} ${under.lastName}`);
  return namesUnderManager;
}

module.exports = { isManager, getRelatedEmployees };
