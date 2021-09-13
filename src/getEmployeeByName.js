const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  const listEmployees = employees.find((employee) =>
    employee.firstName === employeeName
  || employee.lastName === employeeName);
  return listEmployees;
}

console.log(getEmployeeByName());
module.exports = getEmployeeByName;
