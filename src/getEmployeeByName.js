const data = require('../data/zoo_data');

const { employees } = data;

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  return employees.find((cur) =>
    cur.firstName === employeeName || cur.lastName === employeeName);
}

module.exports = getEmployeeByName;
