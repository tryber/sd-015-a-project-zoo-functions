const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) return {};
  const first = data.employees.find((element) => element.firstName === employeeName || element.lastName === employeeName); 
  return first;
}
console.log(getEmployeeByName('Emery'))

module.exports = getEmployeeByName;
