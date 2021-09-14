const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const filtrarAnimais = data.species.find((animalFiltrado) => animalFiltrado.name === animal);
  return filtrarAnimais.residents.every((animalFiltrado) => animalFiltrado > age);
}
module.exports = getAnimalsOlderThan;
