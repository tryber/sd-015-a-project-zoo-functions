const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  // seu código aqui
  const { employees } = data;
  let returnable = {};
  employees.forEach((emp) => {
    if (emp.lastName === employeeName || emp.firstName === employeeName) returnable = emp;
  });
  return returnable;
}

module.exports = getEmployeeByName;
