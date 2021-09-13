const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  // seu código aqui
  return (!employeeName) ? {} : data.employees.find((employee) =>
    employeeName === employee.firstName || employeeName === employee.lastName);
}

module.exports = getEmployeeByName;
