const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  let result = data.employees.find((employee) => employee.firstName === employeeName);
  if (typeof result === 'undefined') {
    result = data.employees.find((employee) => employee.lastName === employeeName);
  }
  if (typeof result === 'undefined') {
    result = {};
  }
  return result;
}

module.exports = getEmployeeByName;
