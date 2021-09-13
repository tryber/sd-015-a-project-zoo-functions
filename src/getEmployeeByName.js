const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (!employeeName) {
    return {};
  }
  return employees.find((nome) =>
    nome.firstName === employeeName || nome.lastName === employeeName);
}

module.exports = getEmployeeByName;
