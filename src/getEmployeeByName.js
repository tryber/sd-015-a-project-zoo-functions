const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const getEmployeeByName = (employeeName) => (employeeName
  ? employees.find((element) => element.firstName === employeeName
   || element.lastName === employeeName)
  : {});
module.exports = getEmployeeByName;
