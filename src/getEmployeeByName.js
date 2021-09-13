const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  // seu código aqui
  const getEmployee = employees.filter((employee) => {
    if (employee.lastName === employeeName || employee.firstName === employeeName) {
      return employee;
    } return null;
  });
  return (getEmployee[0]) ? getEmployee[0] : {};
}

console.log(getEmployeeByName('Emery'));

module.exports = getEmployeeByName;
