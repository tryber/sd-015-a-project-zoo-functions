const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  const name = employees.find(({ firstName, lastName }) =>
    employeeName === firstName || employeeName === lastName);
  if (name === undefined) return {};

  return name;
}

module.exports = getEmployeeByName;
