const data = require('../data/zoo_data');

const { employees } = data;
function getEmployeeByName(employeeName) {
  const persons = employees.find((person) => person.firstName === employeeName
  || person.lastName === employeeName);
  if (employeeName === persons) {
    return {};
  }
  return persons;
}

module.exports = getEmployeeByName;
