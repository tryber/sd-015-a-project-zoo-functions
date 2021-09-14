const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {
  const allManagers = [];
  const managers = () => {
    employees.forEach((person) => { allManagers.push(...person.managers); });
  };
  managers();
  return allManagers.some((managerId) => managerId === id);
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId) === true) {
    const employeesManaged = employees.filter((person) => person.managers.includes(managerId))
      .map((person) => `${person.firstName} ${person.lastName}`);
    return employeesManaged;
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
