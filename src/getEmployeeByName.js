const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (!employeeName) return {};
  const nome = (pessoa) => pessoa.firstName === employeeName || pessoa.lastName === employeeName;
  return data.employees.find(nome);
}
module.exports = getEmployeeByName;
