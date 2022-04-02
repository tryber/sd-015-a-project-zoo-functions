const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  const getName = (obj) => obj.firstName === employeeName || obj.lastName === employeeName;
  let result = data.employees.find(getName);
  if (!employeeName) {
    result = {};
  } return result;
}

module.exports = getEmployeeByName;
