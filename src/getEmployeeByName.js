const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (typeof employeeName === 'undefined') return {}; // Se o parametro for indefnido, retorna objeto vazio
  return data.employees.find((personName) => personName.firstName === employeeName
  || personName.lastName === employeeName);
  // Retorna a primeira condição verdadeira em que o parâmetro seja igual o firstName ou lastName dentro do array employees.
}

module.exports = getEmployeeByName;
