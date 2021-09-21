const data = require('../data/zoo_data');

// Function to identify whether an employee is a manager or not by the 'id'
function isManager(id) {
  return data.employees.some((person) => person.managers.find((manager) => manager === id) === id);
}

// Function to return an array containing the first and the last name of the employees managed by the person referent to the selected id
function getRelatedEmployees(mngId) {
  if (!isManager(mngId)) throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  return data.employees.filter((person) => person.managers.find((manager) =>
    manager === mngId) === mngId).map((name) =>
    `${name.firstName} ${name.lastName}`);
}

module.exports = { isManager, getRelatedEmployees };
