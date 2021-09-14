const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (!employeeName) return {};
  return data.employees.find((name) => name.lastName === employeeName || 
  name.firstName === employeeName);
}

module.exports = getEmployeeByName;
