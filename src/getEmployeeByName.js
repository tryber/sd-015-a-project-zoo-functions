const data = require('../data/zoo_data');

const { employees } = data;

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  return employees.find((elm) => elm.firstName === employeeName || elm.lastName === employeeName);
}

module.exports = getEmployeeByName;
