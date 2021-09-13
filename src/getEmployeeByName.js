const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  // seu código aqui
  const employeeData = data.employees;
  if (employeeName === undefined) {
    return {

    };
  }
  return employeeData.find((aux) => aux.firstName === employeeName || aux.lastName === employeeName);
}

module.exports = getEmployeeByName;
