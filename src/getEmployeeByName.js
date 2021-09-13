const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  // seu código aqui
  const workerName = data.employees
    .find((name) => name.firstName === employeeName || name.lastName === employeeName);
  if (employeeName === undefined) {
    return {};
  }
  return workerName;
}

module.exports = getEmployeeByName;
