const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  const firstNamePessoa = data.employees.find((elemento) =>
    employeeName === elemento.firstName || employeeName === elemento.lastName);
  return firstNamePessoa;
}

module.exports = getEmployeeByName;
