const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {
  // seu código aqui
  return employees.some((manager) => manager.managers.includes(id));
}
function getRelatedEmployees(managerId) {
  // seu código aqui
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  return employees.filter((worker) => worker.managers.includes(managerId))
    .map((workerM) => `${workerM.firstName} ${workerM.lastName}`);
}

module.exports = { isManager, getRelatedEmployees };
/* o minuto 45 da aula gravada 8.2 o nosso colega erick cruz me ajudou a entender o same,tive um problemas pra lembrar como funcionava vlw erick */
