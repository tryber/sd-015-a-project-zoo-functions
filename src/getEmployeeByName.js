const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const getEmployeeByName = (employeeName) => {
  if (!employeeName) return {};
  return data.employees.find((employes) => employeeName === employes.firstName || employeeName === employes.lastName)
};

module.exports = getEmployeeByName;
