const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  // employeeName !== undefined ? data.employees.find((element) => element.firstName === employeeName || element.lastName === employeeName) : {};
  const tes = (element) => element.firstName === employeeName || element.lastName === employeeName;
  return employeeName === undefined ? {} : data.employees.find(tes);
}
module.exports = getEmployeeByName;
