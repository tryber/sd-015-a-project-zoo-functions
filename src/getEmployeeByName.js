const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  const achaFuncionario = (pessoa) => pessoa.firstName === employeeName || pessoa.lastName === employeeName;
  const funcionario = data.employees.find(achaFuncionario);
  return funcionario;
}

module.exports = getEmployeeByName;
