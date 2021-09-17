const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (!employeeName) return {};
  return data.employees.find((employees) => employees.firstName === employeeName
  || employees.lastName === employeeName);
}

module.exports = getEmployeeByName;
