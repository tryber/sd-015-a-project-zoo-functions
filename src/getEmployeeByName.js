const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (typeof employeeName === 'undefined') {
    return {};
  }
  const name = data.employees.find((objPessoa) => objPessoa
    .firstName === employeeName || objPessoa.lastName === employeeName);
  return name;
  // seu código aqui
}
console.log(getEmployeeByName());
module.exports = getEmployeeByName;
