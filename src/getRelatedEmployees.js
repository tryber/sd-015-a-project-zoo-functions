const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {
  // seu código aqui
  return employees.some((employee) => employee.managers.includes((id)));
}

function getRelatedEmployees(managerId) {
  // esse parametro é um objeto que contem as propriedades especficicas como o id da pessoa gerente
  // seu código aqui
  const boss = isManager(managerId); // função que contem o objeto da pessoa gerente
  if (boss) { // verificação
    return employees.filter((employee) => employee.managers.includes(managerId))
      .map((employee) => `${employee.firstName} ${employee.lastName}`);
    // filtragem para pegar o boss do parametro da função e retornar o array com o primeiro e ultimo nome
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!'); // lança o erro se não for satisfeita a condição
}

module.exports = { isManager, getRelatedEmployees };
