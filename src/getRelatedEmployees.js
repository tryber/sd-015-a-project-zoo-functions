const data = require('../data/zoo_data');
const { employees } = require('../data/zoo_data');

const stephanieId = '9e7d4524-363c-416a-8759-8aa7e50c0992';
const burlId = '0e7b460e-acf4-4e17-bcb3-ee472265db83';
const olaId = 'fdb2543b-5662-46a7-badc-93d960fdc0a8';
const managers = [stephanieId, olaId, burlId];

function isManager(id) {
  // seu código aqui
  return managers.some((manager) => manager === id); // o some procura se pelo menos um elemento é igual ao parametro passado
}
// código replicado do github do https://github.com/tryber/sd-015-a-project-zoo-functions/tree/alexandre-pimentel-zoo-functions
function getRelatedEmployees(managerId) {
  // seu código aqui
  if (isManager(managerId) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');// mensagem de erro caso o id passado não seja de um gerente
  } else {
    return employees
      .filter((employee) => (employee.managers // filtra pessoas que sejam gerentes
        .some((manager) => (manager === managerId)))) // compara se o parâmetro é igual ao parametro passado para o some
      .map((filter) => `${filter.firstName} ${filter.lastName}`);// retorna o novo array com nome e sobrenome das pessoas que o gerente é responsável
  }
}

module.exports = { isManager, getRelatedEmployees };
