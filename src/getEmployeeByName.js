const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (employeeName) {
    return data.employees.find((person) =>
      person.firstName === employeeName || person.lastName === employeeName);
  }
  return {};
}

module.exports = getEmployeeByName;
