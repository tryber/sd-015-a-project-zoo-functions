const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (!employeeName) return {};
  return data.employees.find((element) => Object.values(element).includes(employeeName));
}

module.exports = getEmployeeByName;
