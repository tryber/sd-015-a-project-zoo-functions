const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (!employeeName) return {};
  return data.employees.find((nome) => nome.lastName === employeeName
  || nome.firstName === employeeName);
}

module.exports = getEmployeeByName;
