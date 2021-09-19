const { employees } = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  let filterByName = {};
  if (employeeName !== undefined) {
    filterByName = employees.filter((worker) =>
      worker.firstName === employeeName || worker.lastName === employeeName);
    return filterByName[0];
  }
  return filterByName;
}

module.exports = getEmployeeByName;
