const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) return {};
  return data.employees.find((x) => x.firstName === employeeName || x.lastName === employeeName);
}

module.exports = getEmployeeByName;

