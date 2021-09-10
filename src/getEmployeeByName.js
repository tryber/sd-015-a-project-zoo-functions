const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (employeeName !== undefined) {
    return employees.find((e) => e.firstName === employeeName || e.lastName === employeeName);
  }
  return {};
}

module.exports = getEmployeeByName;
