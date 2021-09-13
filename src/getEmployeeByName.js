const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  return data.employees
    .find((empregado) =>
      empregado.firstName === employeeName || empregado.lastName === employeeName);
}

module.exports = getEmployeeByName;
