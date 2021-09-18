const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');
const getSpeciesByIds = require('./getSpeciesByIds');

function getOldestFromFirstSpecies(id) {
  const employee = employees.find((funcionario) => funcionario.id === id);// busca o primeiro funcionário que satifaz
  const animal = getSpeciesByIds(employee.responsibleFor[0]);// chama função utilizada no requisito 1 com o parametro employee.responsibleFor em sua primeira posição(ajuda do colega FATnando)

  return Object.values(animal[0].residents.sort((a, b) => b.age - a.age)[0]);// retorna os valores do objeto que recebe o resultado trazido pela const animal de forma organizada(sort)
}

module.exports = getOldestFromFirstSpecies;
