const data = require('../data/zoo_data');

const { employees } = data;

function getEmployeeObj(someEmployeeName) {
  return employees.find((employee) =>
    (employee.firstName === someEmployeeName || employee.lastName === someEmployeeName));
}
function getEmployeeByName(employeeName) {
  // seu código aqui
  if (!employeeName) return {};
  return getEmployeeObj(employeeName);
}
// console.log(getEmployeeByName('Emery'))
module.exports = getEmployeeByName;
