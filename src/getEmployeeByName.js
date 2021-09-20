const data = require('../data/zoo_data');

function getEmployeeByName(employee) {
  if (employee === undefined) {
    return {};
  }
  return data.employees.find((find) => find.firstName === employee || find.lastName === employee)

}

module.exports = getEmployeeByName;
