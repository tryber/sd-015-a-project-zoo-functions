const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  // must return an object in any case
  if (!employeeName) return {};

  const { employees } = data;

  return employees.find(
    ({ firstName, lastName }) => employeeName === firstName || employeeName === lastName,
  );
}

module.exports = getEmployeeByName;
