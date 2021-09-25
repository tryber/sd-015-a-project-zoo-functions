// const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {
  const manager = data.employees.some((employee) => employee.managers.includes(id));
  return manager;
}
/* Verifica se o id é de um gerente retorna um booleano pelo .some, em que a condição
dentro da arrowFunction é verificar se o id passado está dentro do grupo de gerentes.
*/

function getRelatedEmployees(managerId) {
  if (isManager(managerId)) {
    const findRelatedEmployees = data.employees.filter((colaborators) =>
      (colaborators.managers.includes(managerId)));
    const relatedEmployees = findRelatedEmployees.map((employee) =>
      `${employee.firstName} ${employee.lastName}`);
    return relatedEmployees;
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}
/* O if recebe o retorno booleano da função isManager.
A primeira constante filtra os colaboradores que estão sob responsabilidade
daquele gerente.
A segunda constante cria a lista com os funcionários incluindo seu nome e
sobrenome e a coloca em um array.
Caso a função siga um caminho não esperado, envia a mensagem de erro.
*/

module.exports = { isManager, getRelatedEmployees };
