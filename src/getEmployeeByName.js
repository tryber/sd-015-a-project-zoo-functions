const data = require('../data/zoo_data');

function getEmployeeByName(employeeName = {}) {
  if (typeof (employeeName) !== 'string') return employeeName;
  const { employees: emp } = data;
  return emp.find((e) => e.firstName === employeeName || e.lastName === employeeName);
}

module.exports = getEmployeeByName;
