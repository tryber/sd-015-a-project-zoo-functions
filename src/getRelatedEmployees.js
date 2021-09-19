const data = require('../data/zoo_data');
const { employees } = require('../data/zoo_data');

function isManager(id) {
  // seu código aqui
  return employees.some((elem) => elem.managers.some((idmManeger) => idmManeger === id)); // A alternativa de usar um some detro de outro some conseguir acessando um projeto de um colega "Matheus Oliveira", nessa condição o some vai checar o valor da chave e não o array fornecido pelo elem.managers.
}

function getRelatedEmployees(managerId) {
  // seu código aqui
  if (isManager(managerId) === true) {
    const manager = employees.filter((check) => check.managers.includes(managerId));
    return manager.map((element) => `${element.firstName} ${element.lastName}`);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}
module.exports = { isManager, getRelatedEmployees };
