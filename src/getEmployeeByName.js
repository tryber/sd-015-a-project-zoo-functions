const data = require('../data/zoo_data');

const { employees } = data;

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (!employeeName) {
    return {};
  }
  return employees.find(
    (param) =>
      param.firstName === employeeName || param.lastName === employeeName,
  );
}

module.exports = getEmployeeByName;
