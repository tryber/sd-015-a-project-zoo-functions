const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (employeeName !== undefined) {
    return data.employees.find((Names) => Names
      .firstName === employeeName || Names.lastName === employeeName);
  }
  return {};
}

module.exports = getEmployeeByName;
