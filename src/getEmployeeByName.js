const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  const findEmployee = data.employees.find((worker) =>
    worker.firstName === employeeName || worker.lastName === employeeName);

  if (employeeName === undefined) {
    return {};
  }
  return findEmployee;
}

module.exports = getEmployeeByName;
