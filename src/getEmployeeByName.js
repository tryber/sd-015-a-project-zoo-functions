const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (employeeName !== undefined) {
    return data.employees.find((employee) =>{
      const returning = employee.firstName === employeeName || employee.lastName === employeeName;
      return returning;
    });
  } else {
    return {};
  }
}

module.exports = getEmployeeByName;
