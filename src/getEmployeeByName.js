const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (!employeeName) return {};
  const { employees } = data;
  const isName = (person) => person.firstName === employeeName || person.lastName === employeeName;
  return employees.find(isName);
}

module.exports = getEmployeeByName;
