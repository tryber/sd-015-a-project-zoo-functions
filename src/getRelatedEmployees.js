const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {
  // verifica se o id que for passado aqui está incluso em em.managers = em.managers.includes(id)
  return employees.some((em) => em.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId)) {
    // filtra todos os objetos que tem managerId e joga em um array
    const objetoNome = employees.filter((names) => names.managers.includes(managerId));
    // retorna uma array com template literal fistName e lastName do arrray com objetos objetoNome
    return objetoNome.map((ob) => `${ob.firstName} ${ob.lastName}`);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
