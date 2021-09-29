const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  // seu código aqui
  const { employees } = data;

  if (employeeName === undefined) {
    return {};
  }
  return employees.find((fun) =>
    fun.firstName.includes(employeeName) || fun.lastName.includes(employeeName));
}

module.exports = getEmployeeByName;
