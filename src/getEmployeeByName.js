const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  return employees.find((p) => p.firstName === employeeName || p.lastName === employeeName);
}

module.exports = getEmployeeByName;
