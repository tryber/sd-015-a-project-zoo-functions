const { employees } = require('../data/zoo_data');

const getEmployeeByName = (employeeName) => {
  const employee = employees.find(({ firstName, lastName }) =>
    employeeName === firstName || employeeName === lastName);

  if (employee === undefined) return {};

  return employee;
};

module.exports = getEmployeeByName;
