const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

// www.youtube.com/playlist?list=PLYgzkrmJnLwo-pTURSTti_ljhjWB9BF7- , mentoria git Leo e pedro

function getEmployeeByName(employeeName) {
  if (!employeeName) return {};
  return employees.find((byName) =>
    byName.firstName === employeeName || byName.lastName === employeeName);
}
module.exports = getEmployeeByName;
