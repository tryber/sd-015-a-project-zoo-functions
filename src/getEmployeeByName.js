const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  // entra em um if para caso nao seja dado um parametro retornar obj vazio
  if (employeeName === undefined) {
    return {};
  }
  // caso tenha parametro ele procura pelo primeiro elemento q condiza com o parametro
  return employees.find((inf) => inf.firstName === employeeName || inf.lastName === employeeName);
}

module.exports = getEmployeeByName;
