const data = require('../data/zoo_data');

function isManager(id) {
  // seu código aqui
  const resultado = data.employees.find((busca) => busca.id === id);
  return resultado;
}

function getRelatedEmployees(managerId) {
  // seu código aqui
}

console.log(isManager('0e7b460e-acf4-4e17-bcb3-ee472265db83'));

module.exports = { isManager, getRelatedEmployees };
