const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (!employeeName) return {};
  const { employees } = data;

  return employees.find(
    ({ firstName, lastName }) => [firstName, lastName].includes(employeeName),
  );
}

module.exports = getEmployeeByName;
