const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  const findName = employees.find(({ firstName, lastName }) =>
    employeeName === firstName || employeeName === lastName);
  if (findName === undefined) return {};

  return findName;
}

module.exports = getEmployeeByName;
