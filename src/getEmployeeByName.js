const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (employeeName === undefined) return {};
  return data.employees.find((element) => element.firstName === employeeName
  || element.lastName === employeeName);
}
// console.log(getEmployeeByName('Emery'));
module.exports = getEmployeeByName;
