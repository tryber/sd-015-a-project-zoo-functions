const { employees } = require('../data/zoo_data');

// Function to find employee by the first or the last name and return the referent object
function getEmployeeByName(employeeName) {
  if (!employeeName) return {};
  return employees.find((inf) => employeeName === inf.firstName || employeeName === inf.lastName);
}

module.exports = getEmployeeByName;
