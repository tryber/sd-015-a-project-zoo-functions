const data = require('../data/zoo_data');

const { employees } = data;

function getEmployeeByName(employeeName) {
  const dataEmployer = employees.find((element) =>
    element.firstName.includes(employeeName)
  || element.lastName.includes(employeeName));

  return !(dataEmployer) ? {} : dataEmployer;
}

console.log(getEmployeeByName('Emery'));
module.exports = getEmployeeByName;
