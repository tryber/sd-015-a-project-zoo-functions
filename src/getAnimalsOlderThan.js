const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const animalEncontrado = data.species.find((especie) => especie.name === animal);
  return animalEncontrado.residents.every((residente) => residente.age >= age);
}

module.exports = getAnimalsOlderThan;
