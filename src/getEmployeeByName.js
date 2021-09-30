const data = require('../data/zoo_data');

const { employees } = data;

function getEmployeeByName(employeeName) {
  if (!employeeName) {
    return {};
  }
  return employees.find((fName) =>
    fName.firstName === employeeName || fName.lastName === employeeName); // primeiro ou ultimo nome
}

// console.log(getEmployeeByName());

module.exports = getEmployeeByName;
