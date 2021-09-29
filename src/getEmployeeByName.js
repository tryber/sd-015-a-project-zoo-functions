const data = require('../data/zoo_data');
// Crie uma função que busca as pessoas colaboradoras a partir do primeiro ou último nome
const { employees } = data;

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (!employeeName) {
    return {};
  }
  return employees.find(
    (param) =>
      param.firstName === employeeName || param.lastName === employeeName,
  );
}

module.exports = getEmployeeByName;
