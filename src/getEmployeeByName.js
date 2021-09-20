// const data = require('../data/zoo_data');
const { employees } = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  // seu código aqui
  const name = employees.find((e) =>
    e.firstName === employeeName || e.lastName === employeeName);

  return employeeName ? name : {};
}

module.exports = getEmployeeByName;
