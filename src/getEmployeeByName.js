const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeeByName(employeeNam) {
  if (!employeeNam) return {};
  return employees.find((elem) => elem.firstName === employeeNam || elem.lastName === employeeNam);
}
module.exports = getEmployeeByName;
