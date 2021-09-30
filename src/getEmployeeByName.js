const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  const employeeAnyName = employees.find((employee) => employee.firstName === employeeName
    || employee.lastName === employeeName);
  return employeeAnyName;
}

module.exports = getEmployeeByName;
