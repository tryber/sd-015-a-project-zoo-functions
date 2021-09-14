const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  const employeeFound = data.employees.find((employee) => (
    employee.firstName === employeeName || employee.lastName === employeeName
  ));
  return employeeFound || {};
}

module.exports = getEmployeeByName;
