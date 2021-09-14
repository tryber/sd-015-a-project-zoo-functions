const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (employeeName === undefined) return {};
  const { employees } = data;
  return employees.find(
    (employee) =>
      employee.firstName === employeeName || employee.lastName === employeeName,
  );
}

module.exports = getEmployeeByName;
