const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  const func = (element) => element.firstName === employeeName || element.lastName === employeeName;
  let acharNome = data.employees.find(func);

  if (employeeName === undefined) {
    acharNome = {};
  }
  return acharNome;
}

module.exports = getEmployeeByName;
