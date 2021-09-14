const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  const achaFu = (pessoa) => pessoa.firstName === employeeName || pessoa.lastName === employeeName;
  const funcionario = data.employees.find(achaFu);
  return funcionario;
}

module.exports = getEmployeeByName;
