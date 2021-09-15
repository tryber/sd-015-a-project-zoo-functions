const data = require('../data/zoo_data');

function getEmployeeByName(emplName) {
  if (typeof emplName === 'undefined') return {};

  return data.employees.find((elem) => elem.firstName === emplName || elem.lastName === emplName);
}

module.exports = getEmployeeByName;
