const {
  employees,
} = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) return {};
  return employees.find((id) => id.firstName === employeeName || id.lastName === employeeName);
}

module.exports = getEmployeeByName;
