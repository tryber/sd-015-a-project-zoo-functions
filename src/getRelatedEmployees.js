const data = require('../data/zoo_data');
const { employees } = require('../data/zoo_data');

function isManager(id) {
  return employees.some((zooAgent) => zooAgent.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  const gerent = isManager(managerId);
  if (gerent) {
    return employees.filter((employeesYes) => employeesYes.managers.includes(managerId))
      .map((employeesYes) => `${employeesYes.firstName} ${employeesYes.lastName}`);
  }

  if (isManager !== true) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
}

// A primeira função localiza com o .some se algum funcionário é gerente ou não, conjuntamente com o método .includes, onde é adicionado tal condição na tal função.
// Na segunda função, dizemos que, se o gerente for localizado (true), retornará o nome completo de cada um deles. O filter retorna um novo array com as condições propostas (gerentes selecionados, puxamos eles com a const 'gerent') e o map cria esse array já com os nomes completos.
// Se não tiver nenhum gerente (diferente de true), retornará a mensagem descrita.

module.exports = { isManager, getRelatedEmployees };
