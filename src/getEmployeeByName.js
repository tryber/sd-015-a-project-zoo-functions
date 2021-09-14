// const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  function quem(empregados) {
    return empregados.firstName === employeeName || empregados.lastName === employeeName;
  }
  if (employeeName) {
    const nomeEmpregado = data.employees.find(quem);
    return nomeEmpregado;
  }
  return {};
}

module.exports = getEmployeeByName;
