const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  const empName = employeeName;
  const emps = data.employees;
  if (employeeName === undefined) {
    return {};
  }
  return emps.find((act) => empName.includes(act.firstName) || empName.includes(act.lastName));
}

module.exports = getEmployeeByName;
