const data = require('../data/zoo_data');

const { employees } = data;

function getEmployeeByName(employeeName) {
  // seu código aqui
  return employees.find((employee) => employee.firstName === employeeName
    || employee.lastName === employeeName) ? this : {};
}

module.exports = getEmployeeByName;
