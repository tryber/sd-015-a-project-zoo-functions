const data = require('../data/zoo_data');

// palucas94 repositório consultado: https://github.com/tryber/sd-015-a-project-zoo-functions/blob/84de1244d294601ccc25273d41ca87727c7fc8c3/src/getRelatedEmployees.js
function isManager(id) {
  const findIfManager = data.employees.find((worker) => worker.managers.includes(id)); // find vai retornar o id que estiver dentro do atributo managers.
  if (findIfManager) { // Se for verdadeiro
    return true; // retorna verdadeira
  }
  return false; // se não volta falso
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId) === true) {
    const findEmployees = data.employees.filter((worker) => worker.managers.includes(managerId)); // filter vai retornar um array em managers que ter "managerId"
    const arrayNames = findEmployees.map((person) => `${person.firstName} ${person.lastName}`); // método map vai retornar o código da arrowfunction  pelo número de vezes de findEmployees.length
    return arrayNames;
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!'); // Se o id passado não for de um gerente, dispara um erro com a mensagem.
}

module.exports = { isManager, getRelatedEmployees };
