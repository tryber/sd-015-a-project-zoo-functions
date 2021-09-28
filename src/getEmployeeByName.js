const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

// Retirado do github: https://github.com/tryber/sd-015-a-project-zoo-functions/blob/maria-gabriela-zoo-functions-project/src/getEmployeeByName.js.

function getEmployeeByName(employeeName) {
  const name = employees.find(({ firstName, lastName }) =>
    employeeName === firstName || employeeName === lastName);
  if (name === undefined) return {};

  return name;
}

module.exports = getEmployeeByName;
