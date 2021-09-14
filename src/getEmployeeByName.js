const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  const arrayOfEmployees = data.employees;
  const namedEmployee = arrayOfEmployees.find((employee) =>
    employee.firstName === employeeName || employee.lastName === employeeName);
  if (namedEmployee !== undefined) {
    return namedEmployee;
  }
  return {};
}

module.exports = getEmployeeByName;
