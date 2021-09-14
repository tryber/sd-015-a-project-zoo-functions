const data = require('../data/zoo_data');

const { employees } = data;

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  const search = (fName) => fName.firstName === employeeName || fName.lastName === employeeName;
  return employees.find(search);
}

// console.log(getEmployeeByName());

module.exports = getEmployeeByName;
