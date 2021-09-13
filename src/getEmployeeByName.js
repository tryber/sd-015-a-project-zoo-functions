const data = require('../data/zoo_data');

const { employees } = data;

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (!employeeName) return {};
  return employees.find((employee) => (employee.firstName === employeeName || employee.lastName === employeeName));
}
// console.log(getEmployeeByName('Emery'))
module.exports = getEmployeeByName;
