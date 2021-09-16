const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  const nameCheck = data.employees.find((employee) =>
    employee.firstName === employeeName || employee.lastName === employeeName);

  return employeeName ? nameCheck : {};
}

module.exports = getEmployeeByName;
