const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) {
    const result = {};
    return result;
  }

  const algEmployees = (person) => {
    const resultAlg = person.firstName === employeeName || person.lastName === employeeName;
    return resultAlg;
  };

  const selectedEmployees = data.employees.filter(algEmployees);

  return selectedEmployees[0];
}

/* console.log(getEmployeeByName('Bethea')); */

module.exports = getEmployeeByName;
