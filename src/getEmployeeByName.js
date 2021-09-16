const data = require('../data/zoo_data');

const { employees } = require('../data/zoo_data');

const obj = {};

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) {
    return obj;
  }
  return employees.find((name) =>
    employeeName === name.firstName || employeeName === name.lastName);
}

module.exports = getEmployeeByName;
