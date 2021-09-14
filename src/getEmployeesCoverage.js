const data = require('../data/zoo_data');
const { employees } = require('../data/zoo_data');

function getEmployeesCoverage(employeeName) {
  if (employeeName === undefined) {
    return employees;
  }
  employees.find((fun) => fun.firstName === employeeName || fun.lastName === employeeName || fun.id === employeeName);
}

module.exports = getEmployeesCoverage;
