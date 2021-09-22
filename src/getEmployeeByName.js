const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (!employeeName) {
    return {};
  }
  const name = data.employees.find((funcionario) =>
    funcionario.firstName === employeeName || funcionario.lastName === employeeName);
  return name;
}

module.exports = getEmployeeByName;
