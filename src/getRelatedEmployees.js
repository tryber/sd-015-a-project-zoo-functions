const data = require('../data/zoo_data');

function isManager(id) { // o id passado como parâmetro, na hora de chamar a função
  // seu código aqui
  return data.employees.some((elements) => elements.managers.includes(id));
}

function getRelatedEmployees(managerId) { // managerId é o id passado como parâmetro, na hora de chamar a função
  // seu código aqui
  if (isManager(managerId) === true) { // mesmo managerId
    const funcionario = data.employees.filter((elements) => elements.managers.includes(managerId));
    return funcionario.map((element) => `${element.firstName} ${element.lastName}`);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}
// console.log(getRelatedEmployees('9e7d4524-363c-416a-8759-8aa7e50c0992'));
module.exports = { isManager, getRelatedEmployees };
