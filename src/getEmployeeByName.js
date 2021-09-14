const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) {
    return {}
  }
  return data.employees.find((param) => employeeName.includes(param.firstName) || employeeName.includes(param.lastName));
}

module.exports = getEmployeeByName;
