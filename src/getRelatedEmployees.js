const data = require('../data/zoo_data');

const stephanieId = '9e7d4524-363c-416a-8759-8aa7e50c0992';
const olaId = 'fdb2543b-5662-46a7-badc-93d960fdc0a8';
const burlId = '0e7b460e-acf4-4e17-bcb3-ee472265db83';
const managers = [stephanieId, olaId, burlId];

function isManager(id) {
  const empregado = data.employees.find((ze) => ze.id === id);
  const retorno = managers.some((gerentes) => gerentes === empregado.id);
  return retorno;
}

function getRelatedEmployees(managerId) {
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  const empregados = data.employees.filter((ze) => ze.managers.includes(managerId));
  const retornoGetRelated = empregados.map((ze) => `${ze.firstName} ${ze.lastName}`);
  return retornoGetRelated;
}

module.exports = { isManager, getRelatedEmployees };
