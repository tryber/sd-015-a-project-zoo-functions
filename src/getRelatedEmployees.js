const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {
  // seu código aqui
  let managers = [];
  employees.forEach((employee) => {
    managers = managers.concat(employee.managers);
  });
  managers = [...new Set(managers)];
  return managers.includes(id);
}

function getRelatedEmployees(managerId) {
  // seu código aqui
  if (isManager(managerId)) {
    const relatedEmployees = employees.filter((employee) => employee.managers.includes(managerId));
    const names = [];
    relatedEmployees.forEach((employee) => {
      names.push(`${employee.firstName} ${employee.lastName}`);
    });
    return names;
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };

isManager('porra')