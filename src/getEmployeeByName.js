const data = require('../data/zoo_data');
const { employees } = require('../data/zoo_data');

function getEmployeeByName(Name) {
  if (!Name) {
    return {};
  }
  return employees.find((person) => person.firstName === Name || person.lastName === Name);
}

module.exports = getEmployeeByName;
