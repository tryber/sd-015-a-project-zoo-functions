const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (typeof employeeName === 'undefined') return {};
  return data.employees
    .find((obj) => obj.firstName.includes(employeeName) || obj.lastName.includes(employeeName));
}

module.exports = getEmployeeByName;
