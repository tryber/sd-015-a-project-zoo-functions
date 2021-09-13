const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (!employeeName) {
    return {};
  }
  return data.employees.find((value) => value.firstName.includes(employeeName)
  || value.lastName.includes(employeeName));
}

module.exports = getEmployeeByName;
