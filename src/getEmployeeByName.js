const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  return employees.find((em) => em.lastName === employeeName || em.firstName === employeeName);
}

module.exports = getEmployeeByName;
