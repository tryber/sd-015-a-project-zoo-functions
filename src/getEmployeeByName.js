const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  return data.employees.find(
    (elem) => elem.firstName === employeeName || elem.lastName === employeeName,
  );
}

module.exports = getEmployeeByName;
