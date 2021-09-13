const data = require('../data/zoo_data');

const { employees } = data;

function getEmployeeByName(employeeName) {

  const tokenPerson = employees.find((employerToken) => employerToken.firstName === employeeName
  || employerToken.lastName === employeeName ? employerToken : {});
  return tokenPerson;
}

console.log(getEmployeeByName('Emery'));
module.exports = getEmployeeByName;
