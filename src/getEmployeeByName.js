const data = require('../data/zoo_data');

function acharEmpregado(nome) {
  return data.employees.find((ze) => {
    const retorno = ze.firstName === nome || ze.lastName === nome;
    return retorno;
  });
}

function getEmployeeByName(employeeName) {
  const { ...resposta } = employeeName !== undefined ? acharEmpregado(employeeName) : {};
  return resposta;
}

module.exports = getEmployeeByName;
