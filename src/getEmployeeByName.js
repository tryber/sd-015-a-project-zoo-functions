const data = require('../data/zoo_data');
const { employees } = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (!employeeName) {
    return {};
  }
  return employees.find((name) => name.lastName === employeeName || name.firstName === employeeName);
}

module.exports = getEmployeeByName;
