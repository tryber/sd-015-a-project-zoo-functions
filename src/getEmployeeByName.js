const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (employeeName) {
    const filtro = employees.filter((item) =>
      item.firstName === employeeName || item.lastName === employeeName);
    return filtro.pop();
  }
  return {};
}
console.log(getEmployeeByName());

module.exports = getEmployeeByName;
