const data = require('../data/zoo_data');

function getEmployeeByName(nameEmployee) {
  const employeeFind = data.employees.find((employee) => (
    employee.firstName === nameEmployee || employee.lastName === nameEmployee
  ));
  return employeeFind || {};
}

module.exports = getEmployeeByName;
