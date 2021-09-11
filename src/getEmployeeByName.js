const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  const toFilter = (x) => x.firstName === employeeName || x.lastName === employeeName;
  const seiLá = data.employees.find(toFilter);
  return seiLá === undefined ? {} : data.employees.find(toFilter);
}
console.log(getEmployeeByName());

module.exports = getEmployeeByName;
