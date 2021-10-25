const data = require('../data/zoo_data');

const { employees } = data;

function getEmployeeByName(employeeName) {
  // seu código aqui
  const employee = employees.find((emp) => emp.firstName === employeeName
  || employee.lastName === employeeName);
  return employee || {};
}

module.exports = getEmployeeByName;
