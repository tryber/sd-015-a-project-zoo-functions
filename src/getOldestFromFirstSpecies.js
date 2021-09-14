const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const funcionario = data.employees.find((func) => func.id === id);
  const especie = funcionario.responsibleFor[0];
  const animal = data.species.find((elem) => elem.id === especie);
  const residentes = animal.residents;
  const maisVelho = residentes.sort((a, b) => b.age - a.age)[0];
  return [maisVelho.name, maisVelho.sex, maisVelho.age];
}

module.exports = getOldestFromFirstSpecies;
