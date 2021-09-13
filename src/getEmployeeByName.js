const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (employeeName === undefined) {
    return {};
  }
  return data.employees
    .find((name) => name.firstName === employeeName || name.lastName === employeeName);
}

module.exports = getEmployeeByName;
