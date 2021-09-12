const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {
  return employees.some((element) => element.managers.includes(id));
}

console.log(isManager('9e7d4524-363c-416a-8759-8aa7e50c0992'));

function getRelatedEmployees(managerId) {
  const persons = employees.filter((element) => element.managers.includes(managerId));
  if (isManager(managerId) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!'); /* Segundo o material do course: O throw serve justamente a esse fim: lançar exceções criadas pela pessoa desenvolvedora e retornar erros que não existiriam originalmente no código sem ele. */
  }
  return persons.map((element) => `${element.firstName} ${element.lastName}`);
}

console.log(getRelatedEmployees('9e7d4524-363c-416a-8759-8aa7e50c0992'));

module.exports = { isManager, getRelatedEmployees };
