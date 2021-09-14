/* eslint-disable max-len */
const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (!employeeName) {
    return {};
  }
  const nameAndSurname = data.employees.filter((employee) => employee.firstName === employeeName || employee.lastName === employeeName);
  return nameAndSurname.pop();
}
console.log(getEmployeeByName());
module.exports = getEmployeeByName;