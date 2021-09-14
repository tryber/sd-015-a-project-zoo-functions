const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (!employeeName) return {};

  const teste = (employee) =>
    employee.firstName === employeeName || employee.lastName === employeeName;

  return data.employees.find(teste);
}

module.exports = getEmployeeByName;
