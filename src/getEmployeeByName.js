const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeeByName(employe) {
  if (employe === undefined) {
    return {};
  }
  return employees.find(({ firstName, lastName }) => firstName === employe || lastName === employe);
}

console.log(getEmployeeByName());

module.exports = getEmployeeByName;
