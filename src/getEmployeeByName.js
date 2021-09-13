const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const getEmployeeByName = (employeeName) => {
  if (!employeeName) return {};
  return employees
    .find((employee) => employeeName === employee.firstName || employeeName === employee.lastName);
};
module.exports = getEmployeeByName;
