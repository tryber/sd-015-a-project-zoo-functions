const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  const searchName = (employee) => employee.firstName === employeeName || employee.lastName === employeeName;
  return employees.find(searchName);
}

module.exports = getEmployeeByName;
