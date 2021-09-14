const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (employeeName === undefined) return {};
  return data.employees
  .find(({ firstName, lastName }) => [firstName, lastName].includes(employeeName));
}

module.exports = getEmployeeByName;
