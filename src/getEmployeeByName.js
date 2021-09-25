const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (typeof employeeName === 'undefined') {
    return {};
  }
  const findEmployee = data.employees.find((employee) => (
    employee.firstName === employeeName || employee.lastName === employeeName
  ));
  return findEmployee;
}

/* Criei uma condição de retorno caso não tenha parâmetros.
Criei uma constante que encontra um funcionário dentro do objeto e com uma arrowFunction no find,
determinei a condição de achar pelo nome ou sobrenome.
*/

module.exports = getEmployeeByName;
