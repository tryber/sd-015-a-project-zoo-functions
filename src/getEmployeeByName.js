const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) return {};
  return data.employees.find((fullName) => fullName.firstName === employeeName
  || fullName.lastName === employeeName);
}

module.exports = getEmployeeByName;
