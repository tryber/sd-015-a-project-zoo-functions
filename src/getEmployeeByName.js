const { employees } = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  const getName = employees.find((empName) => {
    if (empName.firstName === employeeName || empName.lastName === employeeName) {
      return true;
    }
    return false;
  });
  return getName;
}

module.exports = getEmployeeByName;
