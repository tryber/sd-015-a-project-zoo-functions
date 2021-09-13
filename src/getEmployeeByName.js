const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  const [...employees] = data.employees;
  const employeeByName = employees.find((employee) =>
    (employee.firstName + employee.lastName).includes(employeeName));
  return employeeName === undefined ? {} : employeeByName;
}
console.log(getEmployeeByName('Emery'));

module.exports = getEmployeeByName;
