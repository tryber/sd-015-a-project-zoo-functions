const { employees } = require('../data/zoo_data');

function getEmployeeByName(employeeName ) {
  if (employeeName !== undefined) {
    return employees.find((iten) => employeeName === iten.firstName || employeeName === iten.lastName);
  }
  return {}; 
}
console.log(getEmployeeByName('Emery'));
module.exports = getEmployeeByName;
