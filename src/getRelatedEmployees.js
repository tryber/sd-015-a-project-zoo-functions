const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {
  const resultado = employees.some((elemento) => elemento.managers.includes(id));
  return resultado;
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId) !== true) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  } else {
    const subordinados = employees.filter((elemento) => elemento.managers.includes(managerId));
    const retorno = subordinados.map(((elemento) => `${elemento.firstName} ${elemento.lastName}`));
    return retorno;
  }
}

module.exports = { isManager, getRelatedEmployees };

console.log(getRelatedEmployees('fdb2543b-5662-46a7-badc-93d960fdc0a8'));
