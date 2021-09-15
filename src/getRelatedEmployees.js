const data = require('../data/zoo_data');

const isManager = (id) => {
  const verificaId = data.employees.some((element) => element.managers.includes(id));
  return verificaId;
};

function getRelatedEmployees(managerId) {
  if (isManager(managerId) === true) {
    const gerenciados = data.employees.filter((element) => element.managers.includes(managerId));
    const funcCriarArray = (elemento) => `${elemento.firstName} ${elemento.lastName}`;
    const nomeDosGerenciados = gerenciados.map(funcCriarArray);
    return nomeDosGerenciados;
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}
// console.log(getRelatedEmployees('9e7d4524-363c-416a-8759-8aa7e50c0992'))
module.exports = { isManager, getRelatedEmployees };
