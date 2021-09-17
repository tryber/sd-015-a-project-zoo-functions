const data = require('../data/zoo_data');

function getEmployeeByName(funcName = {}) {
  if (funcName.length !== undefined) {
    return data.employees.find((func) => func.firstName === funcName || func.lastName === funcName);
  }

  return funcName;
}
console.log(getEmployeeByName('Nigel'));
console.log(getEmployeeByName());
module.exports = getEmployeeByName;
