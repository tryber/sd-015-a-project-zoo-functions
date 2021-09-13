const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  return employeeName ? employees
    .find((element) =>
      element.firstName === employeeName || element.lastName === employeeName) : {};
}
console.log(getEmployeeByName('Nigel'));
module.exports = getEmployeeByName;
