const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (!employeeName) {
    return {};
  }
  const employeeArr = data.employees.filter(employee => {
    return (
      employee.firstName === employeeName || employee.lastName === employeeName
    );
  });
  return employeeArr[0];
}
console.log(getEmployeeByName());

module.exports = getEmployeeByName;
