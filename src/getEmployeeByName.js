const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  this.employeeName = {};
  if (!employeeName) return this.employeeName;
  return data.employees.find((name) => name.firstName === employeeName
                                    || name.lastName === employeeName);
}

module.exports = getEmployeeByName;
