const data = require('../data/zoo_data');

const { employees } = data;

function getEmployeeObj(someEmployeeName) {
  return employees.find((employee) =>
    (employee.firstName === someEmployeeName || employee.lastName === someEmployeeName));
}
function getEmployeeByName(employeeName) {
  if (!employeeName) return {};
  return getEmployeeObj(employeeName);
}

module.exports = getEmployeeByName;
