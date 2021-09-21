// const data = require('../data/zoo_data');
const { employees } = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  // seu código aqui
  const name = employees.find((unit) =>
    unit.firstName === employeeName || unit.lastName === employeeName);

  return employeeName ? name : {};
}

module.exports = getEmployeeByName;
