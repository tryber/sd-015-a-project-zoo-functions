const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(idEmployee) {
  return employees.some((employee) => employee.managers.includes(idEmployee));
  // Se o funcionário (employee) tiver como manager o parametro (idEmployee, a condição é verdadeira)
  // seu código aqui
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId)) {
    // Confirma se o o id é um gerente
    return employees.filter((employeeName) => employeeName.managers.includes(managerId))
    // Filtra em um array todos os funcionários que tem o id/gerente do parametro.
      .map((employeeName) => `${employeeName.firstName} ${employeeName.lastName}`);
    // Mapeia esses funcionários e coloca no array o nome e sobrenome.
  }

  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
