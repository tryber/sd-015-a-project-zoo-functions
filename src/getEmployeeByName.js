const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  return employees.find((nome) => (
    nome.firstName === employeeName || nome.lastName === employeeName));
}

module.exports = getEmployeeByName;
