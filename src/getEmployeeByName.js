const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (!employeeName) return {};
  return employees.find((elemento) => elemento.firstName === employeeName || elemento.lastName === employeeName)
};
module.exports = getEmployeeByName;
