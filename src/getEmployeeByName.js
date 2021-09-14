const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (!employeeName) {
    return {};
  }

  data.employees.find((e) => e.firstName === employeeName || e.lastName === employeeName);
}
console.log(getEmployeeByName());
module.exports = getEmployeeByName;
