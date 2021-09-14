const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) return {};
  const person = data.employees.filter(
    (element) => element.firstName === employeeName || element.lastName === employeeName,
  );
  return person.reduce((element) => element);
}

module.exports = getEmployeeByName;
