const data = require('../data/zoo_data');

function isManager(id) {
  if (id === '0e7b460e-acf4-4e17-bcb3-ee472265db83'
  || id === 'fdb2543b-5662-46a7-badc-93d960fdc0a8'
  || id === '9e7d4524-363c-416a-8759-8aa7e50c0992'
  || id === 'b0dc644a-5335-489b-8a2c-4e086c7819a2') {
    return true;
  }
  return false;
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId) === true) {
    const gerente = data.employees.find((elemento) => elemento.id === managerId);
    const filtro = (funcionario) => funcionario.managers.some((gerDele) => gerDele === gerente.id);
    const listaFuncionarios = data.employees.filter(filtro);
    return listaFuncionarios.map((funciona) => `${funciona.firstName} ${funciona.lastName}`);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
