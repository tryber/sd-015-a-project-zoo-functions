const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  const findEmployee = data.employees.find((employee) => employee.firstName === employeeName
  || employee.lastName === employeeName);
  return findEmployee;
}
console.log(getEmployeeByName());
module.exports = getEmployeeByName;
