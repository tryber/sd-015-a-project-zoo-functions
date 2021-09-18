const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const getEmployeeByName = (employeeName) => {
  if (!employeeName)
    return {};
  return employees.find((byName) => 
  byName.firstName === employeeName || byName.lastName === employeeName);
}
module.exports = getEmployeeByName;
