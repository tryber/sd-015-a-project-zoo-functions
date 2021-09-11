const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (employeeName) {
  return data.employees.find((empregados) => empregados.firstName === employeeName || empregados.lastName === employeeName)
  } 
  return {}
}

module.exports = getEmployeeByName;
