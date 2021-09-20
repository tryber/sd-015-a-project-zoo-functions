const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (!employeeName) return {};
  return employees.find((elem) => elem.firstName === employeeName || elem.lastName === employeeName);
}
module.exports = getEmployeeByName;
