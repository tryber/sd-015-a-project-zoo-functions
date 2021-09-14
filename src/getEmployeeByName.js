const data = require('../data/zoo_data');
const { employees } = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (employeeName === undefined) {
    return {};
  // eslint-disable-next-line max-len
  } return employees.find((nameEmployee) => (nameEmployee.firstName === employeeName || nameEmployee.lastName === employeeName));
}
module.exports = getEmployeeByName;
