const data = require('../data/zoo_data');

const { employees } = data;

function getEmployeeByName(employeeName) {
  // seu código aqui
  return !employeeName ? {} : employees.find((employee) => employee.firstName === employeeName
  || employee.lastName === employeeName);
}

module.exports = getEmployeeByName;
