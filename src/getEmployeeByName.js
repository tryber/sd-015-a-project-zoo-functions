const data = require('../data/zoo_data');

const getEmployeeByName = (employeeName) => {
  if (!employeeName) return {};
  return data.employees
    .find((employee) => employeeName === employee.firstName || employeeName === employee.lastName);
};

module.exports = getEmployeeByName;
