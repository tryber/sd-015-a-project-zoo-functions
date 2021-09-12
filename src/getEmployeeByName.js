const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (employeeName) {
    return data.employees.find((person) =>
      person.firstName === employeeName || person.lastName === employeeName);
  }
  return {};
}

module.exports = getEmployeeByName;
