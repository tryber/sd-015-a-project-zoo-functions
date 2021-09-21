const data = require('../data/zoo_data');

const { employees } = data;

function getEmployeeByName(employeeName) {
  // eslint-disable-next-line max-len
  const persons = employees.find((person) => person.firstName === employeeName || person.lastName === employeeName);
  if (employeeName === persons) {
    return {};
  }
  return persons;
}

module.exports = getEmployeeByName;
