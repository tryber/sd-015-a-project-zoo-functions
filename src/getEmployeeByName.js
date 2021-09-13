/* esta função é responsável pela busca das pessoas colaboradoras através do primeiro ou do último nome delas

O que será avaliado

Sem parâmetros, retorna um objeto vazio
Quando provido o primeiro nome do funcionário, retorna o objeto do funcionário
Quando provido o último nome do funcionário, retorna o objeto do funcionário
 */
const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
    if (typeof(employeeName) === 'undefined') return {};
}
getEmployeeByName();
module.exports = getEmployeeByName;