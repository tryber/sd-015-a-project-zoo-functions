const {
  employees,
} = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  // Caso nenhum nome seja passado, retorna um objeto vazi
  if (employeeName === undefined) return {};
  // Caso seja passado um nome, retorna o objeto que bata com o primeir ou nome OU ultimo nome
  return employees.find((id) => id.firstName === employeeName || id.lastName === employeeName);
}

module.exports = getEmployeeByName;
