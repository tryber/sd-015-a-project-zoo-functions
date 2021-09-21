const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (!employeeName) {
    return {};
  }
  const employeeArr = data.employees.filter(
    (employee) =>
      employee.firstName === employeeName || employee.lastName === employeeName
  );
  return employeeArr[0];
}

module.exports = getEmployeeByName;
