const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) return {};
  return employees.find((fun) => fun.firstName === employeeName || fun.lastName === employeeName);
  // seu código aqui
}

module.exports = getEmployeeByName;
