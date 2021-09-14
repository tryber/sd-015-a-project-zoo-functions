const data = require('../data/zoo_data');
const { employees } = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (!employeeName){
    return {}
  }
  return employees.find((getName)=>
  getName.firstName === employeeName || getName.lastName === employeeName)
}

module.exports = getEmployeeByName;
