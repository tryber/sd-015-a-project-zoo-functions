const data = require('../data/zoo_data');

function isManager(id) {

  const allEmployees = data.employees;
  let allManagers = [];
  allEmployees.forEach((element) => allManagers.push(element.managers));
  return allManagers.find((element) => element == id);
}

console.log(isManager('fdb2543b-5662-46a7-badc-93d960fdc0a8'));

function getRelatedEmployees(managerId) {
  // seu código aqui
}

module.exports = { isManager, getRelatedEmployees };
