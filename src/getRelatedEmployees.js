const data = require('../data/zoo_data');

function isManager(id) {
  const verifyEmployees = data.employees.some((person) => {
    const verifyManagers = person.managers.some((manager) => manager === id);
    return verifyManagers;
  });

  return verifyEmployees;
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId) !== false) {
    const algEmployees = (employee) => employee.managers.some((manager) => manager === managerId);
    const employees = data.employees.filter((algEmployees));
    const names = employees.map((person) => `${person.firstName} ${person.lastName}`);

    return names;
  } throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
