const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const { employees, species } = data;

  const primeiroAnimal = employees.find((animal) => animal.id.includes(id)).responsibleFor[0];
  const residentes = species.find((element) => element.id.includes(primeiroAnimal));
  const ordenarResidente = residentes.residents.sort((jovem, velho) => velho.age - jovem.age);

  return Object.values(ordenarResidente[0]);
}

module.exports = getOldestFromFirstSpecies;
