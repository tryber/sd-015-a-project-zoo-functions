const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  let resposta = data.employees.find((ze) => {
    const retorno = ze.firstName === employeeName || ze.lastName === employeeName;
    return retorno;
  });
  if (resposta === undefined) {
    resposta = {};
  }
  return resposta;
}

module.exports = getEmployeeByName;
