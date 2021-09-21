// const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {
  const isGerente = data.employees.some((gerente) => gerente.managers.includes(id));
  return isGerente;
  // seu código aqui
}

function getRelatedEmployees(managerId) {
  const pegando = isManager(managerId);
  if (pegando === true) {
    const receba = data.employees.filter((funcionario) => funcionario.managers.includes(managerId));
    const god = receba.map((ronaldGod) => `${ronaldGod.firstName} ${ronaldGod.lastName}`);
    return god;
  // seu código aqui
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}
console.log(getRelatedEmployees('0e7b460e-acf4-4e17-bcb3-ee472265db83'));
module.exports = { isManager, getRelatedEmployees };
