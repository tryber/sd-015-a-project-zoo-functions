const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  const filtro = employees.filter((item) =>
    item.firstName === employeeName || item.lastName === employeeName);
  return filtro.pop();
}
console.log(getEmployeeByName('Emery'));

module.exports = getEmployeeByName;
