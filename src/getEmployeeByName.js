/* esta função é responsável pela busca das pessoas colaboradoras através do primeiro ou do último nome delas

O que será avaliado

Sem parâmetros, retorna um objeto vazio
Quando provido o primeiro nome do funcionário, retorna o objeto do funcionário
Quando provido o último nome do funcionário, retorna o objeto do funcionário
 */
const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (typeof (employeeName) === 'undefined') return {};
  const funcioFirstName = employees.find((funcionar) => funcionar.firstName === employeeName);
  const funcioLastName = employees.find((funcionari) => funcionari.lastName === employeeName);
  if (typeof (funcioFirstName) === 'undefined') return funcioLastName;
  return funcioFirstName;
}
getEmployeeByName('Elser');
module.exports = getEmployeeByName;
