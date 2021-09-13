/* ### 3. Implemente a função `getEmployeeByName`

Esta função é responsável pela busca das pessoas colaboradoras através do primeiro ou do último nome delas

**O que será avaliado**

- Sem parâmetros, retorna um objeto vazio
- Quando provido o primeiro nome do funcionário, retorna o objeto do funcionário
- Quando provido o último nome do funcionário, retorna o objeto do funcionário

--- */

const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  return employeeName ? employees
    .find((element) =>
      element.firstName === employeeName || element.lastName === employeeName) : {};
}
console.log(getEmployeeByName('Nigel'));
module.exports = getEmployeeByName;
