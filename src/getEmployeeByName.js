const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  return employees.find((element) => {
    if (element.firstName === employeeName || element.lastName === employeeName) {
      return element;
    }
    return null;
  });
}
console.log(getEmployeeByName());
module.exports = getEmployeeByName;
