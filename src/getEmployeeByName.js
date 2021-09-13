const data = require('../data/zoo_data');

const getEmployeeByName = (employeeName) => data.employees
  .find(((employee) => employeeName === employee.firstName || employeeName === employee.lastName), {});
console.log(getEmployeeByName())
module.exports = getEmployeeByName;
