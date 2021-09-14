const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {
  // seu código aqui
  // verifica se contem o nome da pessoa na parte .managers de todos os outros funcionarios
  return data.employees.some((funcionario) => funcionario.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  // seu código aqui
  if (isManager(managerId)) {
    const gerenteDe = employees.filter((funcionario) => funcionario.managers.includes(managerId));
    return gerenteDe.map(({ firstName, lastName }) => `${firstName} ${lastName}`);
  }
  else {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
}

module.exports = { isManager, getRelatedEmployees };
