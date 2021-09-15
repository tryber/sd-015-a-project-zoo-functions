const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (!employeeName) {
    return {};
  }
  const path = data.employees;
  return path.find((el) => el.firstName === employeeName || el.lastName === employeeName);
}

console.log(getEmployeeByName('Wishart'));

module.exports = getEmployeeByName;
