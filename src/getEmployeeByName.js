const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const getEmployeeByName = (employeeName) => {
  // if (!employeeName) return {};
  // return data.employees.find((funcionarios) => employeeName === funcionarios.firstName || employeeName === funcionarios.lastName)

  if (employeeName === undefined) return {};

  const filter = (employe) => {
    return employe.firstName === employeeName || employe.lastName === employeeName;
  }
  return data.employees.find(filter);
};

module.exports = getEmployeeByName;
