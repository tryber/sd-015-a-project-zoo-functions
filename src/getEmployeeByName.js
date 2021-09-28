const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  const findEmplyee = data.employees.find(
    (employee) => employee.firstName === employeeName || employee.lastName === employeeName,
  );
  const isParamUndefined = (employeeName === undefined) ? {} : findEmplyee;
  return isParamUndefined;
}

module.exports = getEmployeeByName;
