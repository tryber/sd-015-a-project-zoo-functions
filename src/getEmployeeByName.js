const data = require('../data/zoo_data');

const getEmployeeByName = (employeeName) => {
  // if (!employeeName) return {};
  // return data.employees.find((funcionarios) => employeeName === funcionarios.firstName || employeeName === funcionarios.lastName)

  if (employeeName === undefined) return {};

  const filter = (employ) => employ.firstName === employeeName || employ.lastName === employeeName;

  return data.employees.find(filter);
};

module.exports = getEmployeeByName;
