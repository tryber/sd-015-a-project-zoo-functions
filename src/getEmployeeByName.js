const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  return data.employees.find((names) =>
    names.firstName === employeeName || names.lastName === employeeName);
}

module.exports = getEmployeeByName;
